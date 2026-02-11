import { GoogleGenAI } from "@google/genai";
import { GeneratedPoem } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const generateRomanticNoirContent = async (name: string): Promise<GeneratedPoem> => {
  try {
    const model = 'gemini-3-flash-preview';
    const prompt = `
      Escribe una nota de amor o monólogo breve, romántico, estilo "noir" y valiente dirigido a "${name}".
      
      Tema: Inspirado totalmente en el videojuego 'Sleeping Dogs' y el cine de acción de Hong Kong.
      
      Elementos clave a incluir:
      - Luces de neón, lluvia, callejones oscuros.
      - El concepto de "lealtad" (Triadas) y ser "cómplices".
      - El contraste entre un mundo peligroso y criminal y un amor seguro.
      - Usa metáforas sobre el "Hilo Rojo del Destino", "Dragones" o juramentos de sangre (pero románticos).
      - El tono debe ser intenso, protector y apasionado.
      
      Estructura la respuesta como un objeto JSON con dos campos:
      1. "title": Un título genial y estilo cómic/película (ej: "El Corazón del Dragón", "Juramento de Neón").
      2. "content": El texto romántico (máximo 80 palabras).
      
      No uses formato markdown en la respuesta, solo texto JSON puro.
      Responde EXCLUSIVAMENTE en ESPAÑOL.
    `;

    const response = await ai.models.generateContent({
      model,
      contents: prompt,
      config: {
        responseMimeType: "application/json",
      }
    });

    const text = response.text;
    if (!text) throw new Error("No response generated");

    return JSON.parse(text) as GeneratedPoem;
  } catch (error) {
    console.error("Gemini generation failed:", error);
    // Fallback content in case of error
    return {
      title: "Señal Perdida",
      content: "La ciudad genera estática, pero mi señal siempre te encuentra, Aranxita. Incluso en el caos del mercado nocturno, tú eres la única luz que veo. Mi lealtad es tuya."
    };
  }
};