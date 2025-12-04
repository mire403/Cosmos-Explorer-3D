import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const generatePlanetFact = async (planetName: string): Promise<string> => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: `告诉我一个关于${planetName}的科学冷知识，有趣且引人入胜。请直接用中文回答，保持在40字以内。`,
      config: {
        systemInstruction: "你是一位科学博物馆的天文学专家。语言要简洁、生动、专业。",
        temperature: 0.7,
      }
    });

    return response.text || "无法从星际网络获取数据。";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "与深空网络的通信失败。";
  }
};