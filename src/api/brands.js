import {axiosClient} from "@/api/errorHandler";

export default () => ({
    async getBrandList() {
        return await axiosClient().get('https://raw.githubusercontent.com/TeliaSweden/frontend-interview-api/master/brands.json')
    }
});
