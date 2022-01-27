export const translateAPI = {
    async translateWord(word) {
        let response = await fetch(
            `https://tmp.myitschool.org/API/translate/?source=ru&target=en&word=${word}`
        );
        let data = await response.json();
        return data
    },
};
