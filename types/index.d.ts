declare module "@hansdo/esdk-obs-nodejs" {
    export type ObsClientParams = {
      access_key_id: string;
      secret_access_key: string;
      server: string;
      is_secure?: string;
      path_style?: string;
      signature?: string;
      region?: string;
      port?: number;
      max_retry_count?: number;
      timeout?: number;
      ssl_verify?: string;
      long_conn_param?: string;
      security_token?: string;
      is_signature_negotiation?: string;
      is_cname?: boolean;
      max_connections?: number;
      http_agent?: string;
      https_agent?: string;
      user_agent?: string;
    };
    export type ListObjectParams = {
      Bucket: string; // 'required': true
      Prefix?: string; // not required
      Marker?: string; // not required
      MaxKeys?: number; // 'type': 'number', not required
      Delimiter?: string; // not required
      AccessKeyId?: string; // not required
      Signature?: string; // not required
      Policy?: string; // not required
      SecurityToken?: string; // not required
      FsClient?: string; // not required
      RequestPayer?: string; // not required
    };
    export type ObjectMetaContent = {
      Key: string;
      LastModified: string;
      ETag: string;
      Size: number;
      Type: string;
      StorageClass: string;
      Owner: {
        ID: string;
      };
    };


    type Response = {
      CommonMsg: {
        Status: number;
        Code: string;
        Message: string;
        HostId: string;
        RequestId: string;
        InterfaceResult: null;
        Id2: string;
      };
      InterfaceResult: {
        ContentLength: string;
        Date: string;
        Reserved: undefined;
        RequestId: string;
        Id2: string;
        Location: string;
        LocationObs: string;
        Bucket: string;
        Delimiter: string;
        IsTruncated: string;
        Prefix: string;
        Marker: string;
        NextMarker: string;
        MaxKeys: string;
        Contents: ObjectMetaContent[];
        CommonPrefixes: any[];
      };
    };
    export default class ObsClient {
      constructor(params: ObsClientParams);
      putObject(params: any, callback?: any): any;
      getObject(params: any, callback?: any): any;
      deleteObject(params: any, callback?: any): any;
      listObjects(params: ListObjectParams, callback?: any): Promise<Response;
      listBuckets(params: any, callback?: any): any;
      createBucket(params: any, callback?: any): any;
      deleteBucket(params: any, callback?: any): any;
      headBucket(params: any, callback?: any): any;
      putBucketCors(params: any, callback?: any): any;
      getBucketCors(params: any, callback?: any): any;
      deleteBucketCors(params: any, callback?: any): any;
      putBucketAcl(params: any, callback?: any): any;
      getBucketAcl(params: {Bucket:string}, callback?: any): Promise<{
          'Owner' : any,
          'Grants' : any,
          'GrantsV2': any,
      }>;
      putBucketVersioning(params: any, callback?: any): any;
      getBucketVersioning(params: any, callback?: any): any;
      putBucketLifecycle(params: any, callback?: any): any;
      getBucketLifecycle(params: any, callback?: any): any;
      deleteBucketLifecycle(params: any, callback?: any): any;
      putBucketWebsite(params: any, callback?: any): any;
      getBucketWebsite(params: any, callback?: any): any;
      deleteBucketWebsite(params: any, callback?: any): any;
      putBucketLogging(params: any, callback?: any): any;
      getBucketLogging(params: any, callback?: any): any;
      putBucketNotification(params: any, callback?: any): any;
      getBucketNotification(params: any, callback?: any): any;
      putBucketTagging(params: any, callback?: any): any;
      getBucketTagging(params: any, callback?: any): any;
      deleteBucketTagging(params: any, callback?: any): any;
      putBucketPolicy(params: any, callback?: any): any;
      getBucketPolicy(params: any, callback?: any): any;
      deleteBucketPolicy(params: any, callback?: any): any;
      putBucketReplication(params: any, callback?: any): any;
      getBucketReplication(params: any, callback?: any): any;
      deleteBucketReplication(params: any, callback?: any): any;
    }
  }
