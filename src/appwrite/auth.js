import { Client, Account, ID } from "appwrite";
import conf from "../conf/conf.js";
export class AuthService {
  client = new Client();
  account;
  constructor() {
    this.client
      .setEndpoint(conf.appwriteUrl)
      .setProject(conf.appwriteProjectId);
    this.account = new Account(this.client);
  }
  async createAccount({ email, password, name }) {
    try {
      const userAccount = await this.account.create(
        ID.unique(),
        email,
        password,
        name
      );
      if (userAccount) {
        return this.login({ email, password });
      } else {
        return userAccount;
      }
    } catch (e) {
      throw e;
    }
  }
  async login({ email, password }) {
    try {
      return await this.account.createEmailSession(email, password);
    } catch (e) {
      throw e;
    }
  }

  async getCurrentUser() {
    try {
      return await this.account.get();
    } catch (e) {
      console.log("Appwrite service :: getCurrentUser :: error :: ", e);
      throw e;
    }
    return null;
  }

  async logout() {
    try {
      return await this.account.deleteSession("current");
    } catch (e) {
        console.log("Appwrite service :: logout :: error :: ", e);
      throw e;
    }
  }
}

const authService = new AuthService();

export default AuthService;
