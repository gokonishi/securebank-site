"use client";

import { useState } from "react";

export default function ContactPage() {
  const [form, setForm] = useState({
    company: "",
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState("");

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    setResult("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (data.ok) {
        setResult("送信しました！");
        setForm({
          company: "",
          name: "",
          email: "",
          phone: "",
          message: "",
        });
      } else {
        setResult("送信に失敗しました");
      }
    } catch (error) {
      setResult("エラーが発生しました");
    }

    setLoading(false);
  };

  return (
    <main className="mx-auto max-w-3xl px-6 pt-32 pb-16">
      <h1 className="text-3xl font-bold mb-6">お問い合わせ</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input name="company" placeholder="会社名" value={form.company} onChange={handleChange} className="w-full border p-2" />
        <input name="name" placeholder="お名前" value={form.name} onChange={handleChange} className="w-full border p-2" />
        <input name="email" placeholder="メールアドレス" value={form.email} onChange={handleChange} className="w-full border p-2" />
        <input name="phone" placeholder="電話番号" value={form.phone} onChange={handleChange} className="w-full border p-2" />
        <textarea name="message" placeholder="お問い合わせ内容" value={form.message} onChange={handleChange} className="w-full border p-2 h-32" />

        <button type="submit" disabled={loading} className="bg-blue-600 text-white px-4 py-2">
          {loading ? "送信中..." : "送信"}
        </button>
      </form>

      {result && <p className="mt-4">{result}</p>}
    </main>
  );
}