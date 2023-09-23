function formatDateISO(dateTimeString) {
    const date = new Date(dateTimeString);
    const utcYear = date.getUTCFullYear();
    const utcMonth = String(date.getUTCMonth() + 1).padStart(2, "0");
    const utcDay = String(date.getUTCDate()).padStart(2, "0");
    const utcHours = String(date.getUTCHours()).padStart(2, "0");
    const utcMinutes = String(date.getUTCMinutes()).padStart(2, "0");
    return `${utcYear}-${utcMonth}-${utcDay}T${utcHours}:${utcMinutes}`;
}

function formatDateNice(dateTimeString) {
    const date = new Date(dateTimeString);
    
    const optionsDate = { year: "numeric", month: "long", day: "numeric", timeZone: 'UTC' };
    const formattedDate = date.toLocaleDateString(undefined, optionsDate);

    const hours = date.getUTCHours();
    const minutes = String(date.getUTCMinutes()).padStart(2, "0");
    const ampm = hours >= 12 ? "PM" : "AM";
    const formattedTime = `${hours % 12}:${minutes} ${ampm}`;

    return `${formattedTime}, ${formattedDate}`;
}


export { formatDateISO, formatDateNice };
