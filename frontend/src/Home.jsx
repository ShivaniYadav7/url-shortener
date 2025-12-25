import { useState } from "react";

export default function Home() {

    const [longUrl, setLongUrl] = useState("");
    const [shortUrl, setShortUrl] = useState("");

    async function handleShorten() {
        if(!longUrl)return alert("Please enter the long URL");

        try {

        const backendUrl = import.meta.env.VITE_BACKEND_URL || "http://localhost:8080";

        const res = await fetch(`${backendUrl}/url`,{
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({longUrl})
        });

        const data = await res.json();

        if(res.ok) {
            setShortUrl(data.shortUrl);
            
        } else  {
            alert("Error: "+ data.message);
        }
    } catch (err) {
        console.error("Error: ",err);
        alert("Server connection failed");
    }
}

    return (
        <div style={styles.container}>
            <h1>Welcome to MinionURL 🔗</h1>
            <p style={styles.subtitle}>Shorten your long URLs instantly</p>

            <div style={styles.inputBox}>
                <input placeholder="Enter the longURL" value = {longUrl} 
                onChange={(e) => setLongUrl(e.target.value)} style={styles.input}/>

                <button onClick={handleShorten} style={styles.button}>Shorten It!</button>
            </div>

            {shortUrl && (
                <div style={styles.resultBox}> <h3>Short URL</h3>
                <a href={shortUrl} 
                target="_blank" 
                rel = "noopener noreferrer" 
                style= {styles.link}>{shortUrl}</a></div>
            )}
        </div>
    );
}

const styles = {
    container: {
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        background: "#f9fafb",
        padding: "20px",
    },
    title: {
        fontSize: "2.5rem",
        marginBottom: "30px",
    },
    inputBox: {
        display: "flex",
        gap: "10px",
    },
    input: {
        padding: "12px",
        width: "320px",
        borderRadius: "6px",
        border: "1px solid #ccc",
        fontSize: "1rem",
    },
    button: {
        padding: "12px 20px",
        borderRadius: "6px",
        border: "none",
        background: "#2563eb",
        color: "#fff",
        fontSize: "1rem",
        cursor: "pointer",
    },
    resultBox: {
        marginTop: "30px",
        padding: "20px",
        borderRadius: "8px",
        background: "#fff",
        boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
        textAlign: "center",
    },
    link: {
        fontSize: "1.2rem",
        color: "#2563eb",
        textDecoration: "none",
        fontWeight: "bold",
    },
};