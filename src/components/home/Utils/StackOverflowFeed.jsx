import React, { useEffect, useState } from "react";

function StackOverflowFeed({ userId }) {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAnswers = async () => {
      try {
        const answersRes = await fetch(
          `https://api.stackexchange.com/2.3/users/${userId}/answers?order=desc&sort=activity&site=stackoverflow`
        );
        const answersData = await answersRes.json();
        const answers = answersData.items || [];

        const questionIds = answers.map(a => a.question_id).join(";");

        const questionsRes = await fetch(
          `https://api.stackexchange.com/2.3/questions/${questionIds}?site=stackoverflow`
        );
        const questionsData = await questionsRes.json();
        const questionsMap = {};
        for (let q of questionsData.items || []) {
          questionsMap[q.question_id] = q.title;
        }

        const enriched = answers.map(a => ({
          answer_id: a.answer_id,
          question_id: a.question_id,
          title: questionsMap[a.question_id] || "Untitled Question",
          score: a.score,
          date: new Date(a.creation_date * 1000).toLocaleDateString(),
        }));

        setPosts(enriched);
      } catch (err) {
        console.error("Error fetching Stack Overflow data", err);
        setPosts([]);
      } finally {
        setLoading(false);
      }
    };

    fetchAnswers();
  }, [userId]);

  return (
    <div className="w-full px-8 mt-10 text-white">
      <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
        Recent Stack Overflow Answers
      </h2>
      <div className="w-full flex justify-center py-4">

        {loading ? (
          <p className="text-zinc-100">Loading...</p>
        ) : posts.length === 0 ? (
          <p className="text-zinc-100">No recent answers found.</p>
        ) : (
          <div className="w-fit grid gap-4 md:grid-cols-2">
            {posts.slice(0, 4).map((post, i) => (
              <a
                key={i}
                href={`https://stackoverflow.com/a/${post.answer_id}`}
                target="_blank"
                rel="noopener noreferrer"
                className="block p-4 bg-zinc-900 rounded-xl shadow hover:shadow-lg transition text-zinc-200 border border-zinc-600 cursor-pointer hover:scale-[1.02] duration-300 hover:border-zinc-400"
              >
                <div className="font-medium mb-1">{post.title}</div>
                <div className="text-sm text-zinc-300">
                  Score: {post.score} | {post.date}
                </div>
              </a>
            ))}
          </div>
        )}

      </div>
    </div>
  );
}

export default StackOverflowFeed;
