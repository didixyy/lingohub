
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const getAIFeedback = async (transcript: string) => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `You are an English pronunciation coach. Analyze the following transcript from a user practicing a movie line and provide encouraging feedback and one specific tip for improvement in Chinese. Transcript: "${transcript}"`,
      config: {
        temperature: 0.7,
        maxOutputTokens: 200,
      }
    });
    return response.text;
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "暂时无法获取AI反馈，请稍后再试。";
  }
};

export const generateDailyProverb = async () => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: "Generate a short, inspiring English proverb from a famous movie, translate it to Chinese, and explain why it's great for learning English.",
      config: {
        responseMimeType: "application/json",
      }
    });
    return response.text;
  } catch (error) {
    return null;
  }
};
