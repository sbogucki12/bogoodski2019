const baseURI = window.document.baseURI;

const localPath = () => {
    if (process.env.NODE_ENV === 'production') {
        return 'https://bogoodski2019.azurewebsites.net/'
    } else {
        return baseURI;
    }
};

export default localPath;
