import axios from "axios";

export async function fetchPage(url: string) {
    const res = await axios.get(url);
    return res.data as string;
}