import React, { useState, useEffect } from 'react';

function Auth() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (message) {
      timer = setTimeout(() => {
        setMessage('');
      }, 2000);
    }
    return () => clearTimeout(timer);
  }, [message]);

  const showNotification = (userName: string) => {
    if (!("Notification" in window)) {
      alert("Les notifications ne sont pas supportées par votre navigateur.");
      return;
    }

    if (Notification.permission === "granted") {
      new Notification("Authentification réussie", {
        body: `Bienvenue, ${userName} !`,
        icon: "https://cdn-icons-png.flaticon.com/512/5610/5610944.png" // Icône facultative
      });
    } else if (Notification.permission !== "denied") {
      Notification.requestPermission().then(permission => {
        if (permission === "granted") {
          new Notification("Authentification réussie", {
            body: `Bienvenue, ${userName} !`,
            icon: "https://cdn-icons-png.flaticon.com/512/5610/5610944.png"
          });
        }
      });
    }
  };

  const handleSubmit = () => {
    if (name.trim() === "" || email.trim() === "") {
      alert("Remplir les champs");
      console.log("Error, Value none");
      console.log(`Name : ${name} and email ${email}`);
    } else {
      setMessage(`Authentifié : ${name}`);
      console.log(`Name : ${name} and email ${email}`);

      // Afficher la notification
      showNotification(name);
    }
  };

  return (
    <div className="auth">
      <h2 className="subt">Authentification</h2>
      <input
        type="text"
        id="name"
        placeholder="Nom"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        id="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button id="valider" onClick={handleSubmit}>
        Valider
      </button>
      <p id="message" className={message ? "visible" : ""}>{message}</p>
    </div>
  );
}

export default Auth;
