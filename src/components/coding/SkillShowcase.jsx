

const SkillShowcase = ({data }) => {
    return (
        <div className="text-center max-w-3xl mt-14 flex flex-col gap-y-2">
            {data.map((skill,_) =>
                <div key={skill.title}>
                    <img
                        src={`https://capsule-render.vercel.app/api?type=cylinder&color=gradient&customColorList=12&height=45&section=header&text=${encodeURIComponent(skill.title)}&fontSize=22&fontColor=fff&animation=fadeIn`}
                        alt={skill.title}
                        className="w-full"
                    />
                    <div className="flex flex-wrap justify-center gap-4 my-4">
                        {skill.cards.map(({ name, logo, color }) => (
                            <img
                                key={name}
                                className="scale-110 hover:scale-105 transition-all duration-100"
                                src={`https://img.shields.io/badge/-${encodeURIComponent(
                                    name
                                )}-000?style=for-the-badge&logo=${logo}&logoColor=${color}&labelColor=000`}
                                alt={name}
                            />
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default SkillShowcase;
