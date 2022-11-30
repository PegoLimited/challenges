import { RESTDataSource } from "apollo-datasource-rest";

export class HackernewsAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = "https://hacker-news.firebaseio.com/v0/";
  }

  async getStoryIdsByType(type: "top" | "best" | "new" | string) {
    switch (type) {
      case "top":
        return await this.get("topstories.json");
        break;
      case "best":
        return await this.get("beststories.json");
        break;
      case "new":
        return await this.get("newstories.json");
      default:
        break;
    }
  }

  async getItemById(id: any) {
    return await this.get(`item/${id}.json`);
  }

  async getItemCommentIds(id: any) {
    const item = await this.get(`item/${id}.json`);
    return item.kids;
  }

  async getUserById(id: any) {
    return await this.get(`user/${id}.json`);
  }
}
