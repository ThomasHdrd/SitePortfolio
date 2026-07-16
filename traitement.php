<?php
// --------- CONFIG ---------
$TO_EMAIL   = "contact@thomashoudard.com";   // <- ton adresse de réception
$SITE_NAME  = "thomashoudard.com";
$FROM_EMAIL = "no-reply@thomashoudard.com";  // idéalement un email de ton domaine

// --------- UTIL ---------
function clean($v) {
  return trim(strip_tags($v ?? ""));
}

// --------- HONEYPOT (anti-bot) ---------
if (!empty($_POST['website'])) { // champ caché "website" à ajouter dans le formulaire
  http_response_code(400);
  exit("Erreur : spam détecté.");
}

// --------- RÉCUP / VALIDATION ---------
$name    = clean($_POST['name'] ?? "");
$email   = clean($_POST['email'] ?? "");
$message = trim($_POST['message'] ?? "");
$pack    = clean($_POST['pack'] ?? "Pack Design UX/UI"); // fallback

$errors = [];

if ($name === "" || mb_strlen($name) < 2)          $errors[] = "Nom invalide.";
if (!filter_var($email, FILTER_VALIDATE_EMAIL))     $errors[] = "Email invalide.";
if ($message === "" || mb_strlen($message) < 10)    $errors[] = "Message trop court.";

// --------- ENVOI ---------
if ($errors) {
  http_response_code(400);
  echo "Merci de corriger :\n- " . implode("\n- ", $errors);
  exit;
}

$subject = "Nouvelle demande – $pack";
$body = "Vous avez reçu une nouvelle demande depuis $SITE_NAME\n\n"
      . "Pack : $pack\n"
      . "Nom  : $name\n"
      . "Email: $email\n\n"
      . "Message:\n$message\n\n"
      . "--------\n"
      . "IP: " . ($_SERVER['REMOTE_ADDR'] ?? 'N/A') . "\n"
      . "UA: " . ($_SERVER['HTTP_USER_AGENT'] ?? 'N/A') . "\n"
      . "Date: " . date('Y-m-d H:i:s');

$headers  = "From: $SITE_NAME <$FROM_EMAIL>\r\n";
$headers .= "Reply-To: $name <$email>\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";
$headers .= "X-Mailer: PHP/" . phpversion();

$ok = @mail($TO_EMAIL, '=?UTF-8?B?'.base64_encode($subject).'?=', $body, $headers);

if ($ok) {
  // ✅ SUCCÈS
  echo "<!doctype html><meta charset='utf-8'>
        <style>body{font-family:system-ui,Arial;margin:40px;color:#222}
        .card{max-width:680px;margin:auto;padding:24px;border:1px solid #e6e8eb;border-radius:12px}
        a{color:#2F84C6;text-decoration:none;font-weight:700}</style>
        <div class='card'>
          <h1>Merci, $name 👌</h1>
          <p>Votre demande pour <strong>$pack</strong> a bien été envoyée. Je vous réponds très vite à <strong>$email</strong>.</p>
          <p><a href='index.html'>← Retour au site</a></p>
        </div>";
} else {
  http_response_code(500);
  echo "Désolé, l’envoi a échoué. Réessayez plus tard ou écrivez-moi à $TO_EMAIL.";
}
