import React from "react";
import { TextInput, Textarea, Button, Heading } from "../atoms";

export default function ContactForm() {
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    message: "",
  });
  const [isLoading, setIsLoading] = React.useState(false);
  const [submitStatus, setSubmitStatus] = React.useState<{
    type: "success" | "error";
    message: string;
  } | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    // Clear status when user starts typing
    setSubmitStatus(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setSubmitStatus(null);

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to send email");
      }

      setSubmitStatus({
        type: "success",
        message:
          "Nachricht erfolgreich gesendet! Ich melde mich bald bei Ihnen.",
      });
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      setSubmitStatus({
        type: "error",
        message:
          error instanceof Error
            ? error.message
            : "Failed to send message. Please try again.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 p-4 sm:p-6 md:p-8">
      <Heading level={3} className="text-gray-900 dark:text-white mb-4 sm:mb-6">
        Nachricht Senden
      </Heading>

      <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
        {submitStatus && (
          <div
            className={`p-4 rounded-lg ${
              submitStatus.type === "success"
                ? "bg-green-50 dark:bg-green-900/20 text-green-800 dark:text-green-200 border border-green-200 dark:border-green-800"
                : "bg-red-50 dark:bg-red-900/20 text-red-800 dark:text-red-200 border border-red-200 dark:border-red-800"
            }`}
          >
            {submitStatus.message}
          </div>
        )}

        <TextInput
          label="Vollständiger Name"
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Ihr vollständiger Name"
          iconType="user"
          required
          disabled={isLoading}
        />

        <TextInput
          label="E-Mail-Adresse"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="ihre.email@beispiel.com"
          iconType="mail"
          required
          disabled={isLoading}
        />

        <Textarea
          label="Nachricht"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={6}
          placeholder="Erzählen Sie mir von Ihrem Projekt oder sagen Sie einfach Hallo..."
          required
          disabled={isLoading}
        />

        <Button type="submit" fullWidth disabled={isLoading}>
          {isLoading ? "Wird gesendet..." : "Nachricht Senden"}
        </Button>
      </form>
    </div>
  );
}
