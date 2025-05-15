import emailjs from "@emailjs/browser"

const sendEmail = (event,{ website, page, name, email, content}) => {
    event.preventDefault()
    const templateParams = {
        website: website,
        page: page,
        name: name,
        email: email,
        content: content
    }

    let status = false;

    emailjs
        .send(
        "service_zf903fl",
        "template_jnmokas",
        templateParams,
        "2-JjtipQ6rzIfl6W3"
        )
        .then(
        (response) => {
            console.log(`SUCCESS! ,${response.status},${response.text}`)
        }
        ,(err)=>{
            console.error(`FAILED! ,${err}`)
        }
        );
}

export default sendEmail;