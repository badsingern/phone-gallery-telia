import {axiosClient} from "@/api/errorHandler";

export default () => ({
    async getPhoneList(brand = '') {
        return await axiosClient().get('https://raw.githubusercontent.com/TeliaSweden/frontend-interview-api/master/phones.json')
            .then((res) => {
                return brand ? res.data.filter(phone => phone.brand === brand) : res.data
            })
    }
});
