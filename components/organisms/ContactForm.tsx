import React from "react";
import { TextInput, Textarea, Button, Heading } from "../atoms";

interface ContactFormProps {
  onSubmit: (data: { name: string; email: string; message: string }) => void;
}

export default function ContactForm({ onSubmit }: ContactFormProps) {
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 p-4 sm:p-6 md:p-8">
      <Heading level={3} className="text-gray-900 dark:text-white mb-4 sm:mb-6">
        Nachricht Senden
      </Heading>

      <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
        <TextInput
          label="Vollständiger Name"
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Ihr vollständiger Name"
          iconType="user"
          required
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
        />

        <Textarea
          label="Nachricht"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={6}
          placeholder="Erzählen Sie mir von Ihrem Projekt oder sagen Sie einfach Hallo..."
          required
        />

        <Button type="submit" fullWidth>
          Nachricht Senden
        </Button>
      </form>
    </div>
  );
}
