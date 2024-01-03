import OpenAI from 'openai';
import { OpenAI_API_KEY } from './constants';

const openai = new OpenAI({
  apiKey: OpenAI_API_KEY, // This is the default and can be omitted
  dangerouslyAllowBrowser: true
});

export default openai;