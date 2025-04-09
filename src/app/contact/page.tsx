"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Validação dos campos
      if (
        !formData.name.trim() ||
        !formData.email.trim() ||
        !formData.message.trim()
      ) {
        throw new Error("Preencha todos os campos");
      }

      // Criar o corpo do email
      const emailBody = `
Nome: ${formData.name}
Email: ${formData.email}

Mensagem:
${formData.message}
      `;

      // Criar o link mailto
      const mailtoLink = `mailto:support@caza-tech.com?subject=Contato via site - ${formData.name}&body=${encodeURIComponent(emailBody)}`;

      // Abrir o cliente de email
      window.location.href = mailtoLink;

      toast.success("Cliente de email aberto com sucesso!");
      setFormData({ name: "", email: "", message: "" });
    } catch (error: unknown) {
      const errorMessage =
        error instanceof Error
          ? error.message
          : "Erro desconhecido ao processar formulário";

      console.error("Erro completo:", error);
      toast.error(errorMessage);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-24">
      <div className="container max-w-4xl">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center mb-6">
            <div className="tag">
              <p className="text-xs font-medium uppercase">
                DISPONÍVEL PARA TRABALHOS
              </p>
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-medium mb-6">
            Vamos colocar seu projeto no ar!
          </h1>
        </div>

        <form
          onSubmit={handleSubmit}
          id="contact-form"
          className="space-y-8"
        >
          <div className="space-y-4">
            <div>
              <Label htmlFor="name">Nome</Label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="mt-1"
                required
                disabled={isSubmitting}
                aria-required="true"
              />
            </div>

            <div>
              <Label htmlFor="email">E-mail</Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                className="mt-1"
                required
                disabled={isSubmitting}
                aria-required="true"
              />
            </div>

            <div>
              <Label htmlFor="message">Mensagem</Label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="mt-1 h-40"
                required
                disabled={isSubmitting}
                aria-required="true"
              />
            </div>
          </div>

          <div className="flex justify-center">
            <Button
              type="submit"
              className="bg-black text-white hover:bg-black/90 px-10 py-6 text-base uppercase font-medium disabled:opacity-75"
              disabled={isSubmitting}
              aria-label={
                isSubmitting ? "Processando..." : "Enviar mensagem"
              }
            >
              {isSubmitting ? "Processando..." : "Enviar Mensagem"}
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
}
