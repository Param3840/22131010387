

const ACCESS_TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiJwYXJhbXZlZXIuMjJzY3NlMTAxMDI1NkBnYWxnb3RpYXN1bml2ZXJzaXR5LmVkdS5pbiIsImV4cCI6MTc1MTAxNjE2NCwiaWF0IjoxNzUxMDE1MjY0LCJpc3MiOiJBZmZvcmQgTWVkaWNhbCBUZWNobm9sb2dpZXMgUHJpdmF0ZSBMaW1pdGVkIiwianRpIjoiZDlkYTBmOTYtMDRlMi00ZGE5LWE0MDQtNTlmMWYyZmRiZjIzIiwibG9jYWxlIjoiZW4tSU4iLCJuYW1lIjoicGFyYW12ZWVyIGt1bWFyIHNpbmdoIiwic3ViIjoiZWZkZjUzNjgtMzA1NS00MjMyLWFiNzAtYTkwYzhmMzMxZDAzIn0sImVtYWlsIjoicGFyYW12ZWVyLjIyc2NzZTEwMTAyNTZAZ2FsZ290aWFzdW5pdmVyc2l0eS5lZHUuaW4iLCJuYW1lIjoicGFyYW12ZWVyIGt1bWFyIHNpbmdoIiwicm9sbE5vIjoiMjIxMzEwMTAzODciLCJhY2Nlc3NDb2RlIjoiTXVhZ3ZxIiwiY2xpZW50SUQiOiJlZmRmNTM2OC0zMDU1LTQyMzItYWI3MC1hOTBjOGYzMzFkMDMiLCJjbGllbnRTZWNyZXQiOiJKV3RYQ2ZIUlhoWW1CY0NmIn0.3Y0xviJKmMDiIbJg4bUXitEUJOF9wBqfvYHigioNJ9o"; 

export async function log(stack, level, pkg, message) {
  try {
    const response = await fetch("http://20.244.56.144/evaluation-service/logs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: ACCESS_TOKEN,
      },
      body: JSON.stringify({
        stack,
        level,
        package: pkg,
        message,
      }),
    });

    const data = await response.json();
    console.log("🟢 Log sent:", data.message);
  } catch (error) {
    console.error("🔴 Logging failed:", error.message);
  }
}
