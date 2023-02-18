// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { JobList, ApplicantList } = initSchema(schema);

export {
  JobList,
  ApplicantList
};