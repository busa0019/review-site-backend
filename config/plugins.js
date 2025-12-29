export default  ({ env }) => ({
  upload: {
    config: {
      provider: '@strapi/provider-upload-cloudinary',
      providerOptions: {
        cloud_name: env('CLOUDINARY_CLOUD_NAME'),
        api_key: env('CLOUDINARY_API_KEY'),
        api_secret: env('CLOUDINARY_API_SECRET'),
        secure: true,
      },
      actionOptions: {
        upload: {
          upload_preset: 'ml_default',
          folder: 'samples/ecommerce',
        },
        delete: {},
      },
    },
  },
documentation: {
    enabled: false, 
  },
});
