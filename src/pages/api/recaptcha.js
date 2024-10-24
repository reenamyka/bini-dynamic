import fetch from "node-fetch";

export default (req, res) => {
    return new Promise((resolve, reject) => {
        const { body } = req;
        const { captcha } = body;
        fetch(
            `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.NEXT_PUBLIC_RECAPTCHA_SECRET_KEY}&response=${captcha}`,
            {
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded; charset=utf-8"
                },
                method: "POST"
            }
        ).then((response) => {
            response.json().then((response)=>{
                res.statusCode = 200;
                res.end(JSON.stringify(response));
                resolve();
            }).catch((result) => {
                res.statusCode = 500;
                res.end(JSON.stringify({message: "json error"}));
                reject();
            });
        }).catch((result) => {
            res.statusCode = 500;
            res.end(JSON.stringify({message: "catch error"}));
            reject();
        });
    });
};
