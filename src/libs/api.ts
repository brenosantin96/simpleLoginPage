import { User } from '@/types/User';
import { users } from '../data/DataUsers'

export const useApi = () => ({


    loginUser: async (email: string, password: string) => {

        let user = users.find((item) => item.email === email || item.user === email);


        if (!user) {
            alert("Usuario com email nao encontrado")
            return
        }

        if (user) {
            if (user.password === password) {
                return true;
            } else {
                return false;
            }
        } else {
            return false
        }

    },

    logout: async () => {

    }


})