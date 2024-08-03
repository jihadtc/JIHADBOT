import axios from 'axios';

let handler = async (m, { conn }) => {
    conn.autoai = conn.autoai ? conn.autoai : {};

    // تجاهل الرسائل الفارغة أو التي تحتوي على روابط
    if (!m.text || m.isBaileys || m.text.includes("http://") || m.text.includes("https://")) return;

    let name = "JIDOX AI";
    await conn.sendMessage(m.chat, { react: { text: `📜`, key: m.key }});

    const messages = [
        { role: "system", content: `أنت اسمك ${name} صنعك صديقك jihad هذا هو الانستغرام الخاص بjihad Instagram.com/@jihad_tc ، استعمل رموز رجولية عند الإجابة` },
        { role: "user", content: m.text }
    ];

    try {
        const response = await axios.post("https://deepenglish.com/wp-json/ai-chatbot/v1/chat", {
            messages
        });
        const responseData = response.data;
        const hasil = responseData;
        await conn.sendMessage(m.chat, { react: { text: `✅`, key: m.key }});
        m.reply(hasil.answer);
    } catch (error) {
        console.error("حدث خطأ أثناء جلب البيانات:", error);
        throw error;
    }
}

handler.before = async (m, { conn }) => {
    conn.autoai = conn.autoai ? conn.autoai : {};

    // تجاهل الرسائل الفارغة أو التي تحتوي على روابط
    if (!m.text || m.isBaileys || m.text.includes("http://") || m.text.includes("https://")) return;

    let name = "JIDOX AI";
    await conn.sendMessage(m.chat, { react: { text: `⏱️`, key: m.key }});

    const messages = [
        { role: "system", content: `أنت اسمك ${name} صنعك صديقك jihad هذا هو الانستغرام الخاص بjihad Instagram.com/@jihad_tc ، استعمل رموز رجولية عند الإجابة` },
        { role: "user", content: m.text }
    ];

    try {
        const response = await axios.post("https://deepenglish.com/wp-json/ai-chatbot/v1/chat", {
            messages
        });
        const responseData = response.data;
        const hasil = responseData;
        await conn.sendMessage(m.chat, { react: { text: `✅`, key: m.key }});
        m.reply(hasil.answer);
    } catch (error) {
        console.error("حدث خطأ أثناء جلب البيانات:", error);
        throw error;
    }
}

handler.command = ['autoai'];
handler.tags = ["ai"]
handler.help = ['autoai']
export default handler;
