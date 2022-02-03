export const translateAPI = {
    async translateWord(word) {
        try {
            let response = await fetch(
                `https://tmp.myitschool.org/API/translate/?source=ru&target=en&word=${word}`
            );
            let data = await response.json();
            return data;
        } catch (e) {
            return e.message;
        }
    },
};
