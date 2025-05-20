import conf from "../conf/conf.js";

import { Client, Account, ID, Databases, Storage, Query } from "appwrite";

export class Service {
  client = new Client();
  account;
  database;
  storage;

  constructor() {
    this.client
      .setEndpoint(conf.appwriteUrl)
      .setProject(conf.appwriteProjectId);
    this.account = new Account(this.client);
    this.database = new Databases(this.client);
    this.storage = new Storage(this.client);
  }

  async createPost({ title, slug, content, featuredImage, status, userId }) {
    try {
      const post = await this.database.createDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        ID.unique(),
        {
          title,
          //slug,
          content,
          featuredImage,
          status,
          userId,
        }
      );
      return post;
    } catch (error) {
      console.error("Error creating post:", error);
      throw error;
    }
  }

  async updatePost(slug, { title, content, featuredImage, status }) {
    try {
      const post = await this.database.updateDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        slug,
        {
          title,
          //slug,
          content,
          featuredImage,
          status,
        }
      );
      return post;
    } catch (error) {
      console.error("Error updating post:", error);
      throw error;
    }
  }

  async deletePost(slug) {
    try {
      const post = await this.database.deleteDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        slug
      );
      return true;
    } catch (error) {
      console.error("Error deleting post:", error);
      throw error;
      return false;
    }
  }

  async getPost(slug) {
    try {
      const post = await this.database.getDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        slug
      );
      return post;
    } catch (error) {
      console.error("Error getting post:", error);
      throw error;
    }
  }

  async getPosts(querries = [Query.equal("status", "active")]) {
    try {
      const posts = await this.database.listDocuments(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        querries
      );
      return posts;
    } catch (error) {
      console.error("Error getting posts:", error);
      throw error;
    }
  }

  //file upload service

  async uploadFile(file) {
    try {
      const fileUploaded = await this.storage.createFile(
        conf.appwriteBucketId,
        ID.unique(),
        file
      );
      return fileUploaded;
    } catch (error) {
      console.error("Error uploading file:", error);
      throw error;
      return false;
    }
  }

  async deleteFile(fileId) {
    try {
      const fileDeleted = await this.storage.deleteFile(
        conf.appwriteBucketId,
        fileId
      );
      return fileDeleted;
    } catch (error) {
      console.error("Error deleting file:", error);
      throw error;
      return false;
    }
  }

  getFilePreview(fileId) {
    try {
      const filePreview = this.storage.getFilePreview(
        conf.appwriteBucketId,
        fileId
      );
      return filePreview;
    } catch (error) {
      console.error("Error getting file preview:", error);
      throw error;
    }
  }
}

const service = new Service();

export default Service;
