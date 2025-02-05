interface Props {
    url : string
    token : string
}
export const fetchPageData = async ({url,token,callback}:Props) => {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/admin/${url}`, {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${token}`,
                "Accept": "application/json",
                "Content-Type": "application/json",
            },
        });
        const resData = await res.json();
        if(resData) {
            return resData.data;
        }
    } catch (error) {
        console.error("Ошибка при получении данных:", error);
    }
};