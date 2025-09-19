import type { Schema, Struct } from '@strapi/strapi';

export interface ContentText extends Struct.ComponentSchema {
  collectionName: 'components_content_texts';
  info: {
    displayName: 'text';
  };
  attributes: {
    content: Schema.Attribute.Blocks;
  };
}

export interface MediaImgBlog extends Struct.ComponentSchema {
  collectionName: 'components_media_img_blogs';
  info: {
    displayName: 'img-blog';
  };
  attributes: {
    alt: Schema.Attribute.String;
    url: Schema.Attribute.String;
  };
}

export interface MediaImgCover extends Struct.ComponentSchema {
  collectionName: 'components_media_img_covers';
  info: {
    displayName: 'img-cover';
  };
  attributes: {
    alt: Schema.Attribute.String;
    url: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'content.text': ContentText;
      'media.img-blog': MediaImgBlog;
      'media.img-cover': MediaImgCover;
    }
  }
}
