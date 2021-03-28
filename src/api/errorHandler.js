import axios from "axios";
import {useRouter} from 'vue-router';

export const axiosClient = () => {
    const client = axios.create();
    const router = useRouter();

    client.interceptors.response.use(
        res => res,
        () => {
            router.push('/error');
        }
    );

    return client;
};


