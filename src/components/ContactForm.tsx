
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Loader2 } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

interface FormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

const ContactForm = () => {
  const { toast } = useToast();
  const { t } = useLanguage();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      console.log("Form submitted:", data);
      
      toast({
        title: t('contact.messageSent'),
        description: t('contact.messageSuccess'),
      });
      
      reset();
    } catch (error) {
      toast({
        title: t('contact.errorTitle'),
        description: t('contact.errorMessage'),
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
            {t('contact.fullName')} *
          </label>
          <Input
            id="name"
            placeholder={t('contact.fullNamePlaceholder')}
            {...register("name", { required: t('contact.nameRequired') })}
            className={errors.name ? "border-red-500" : ""}
          />
          {errors.name && (
            <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            {t('contact.email')} *
          </label>
          <Input
            id="email"
            type="email"
            placeholder={t('contact.emailPlaceholder')}
            {...register("email", { 
              required: t('contact.emailRequired'), 
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: t('contact.emailInvalid')
              }
            })}
            className={errors.email ? "border-red-500" : ""}
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
            {t('contact.phone')}
          </label>
          <Input
            id="phone"
            placeholder={t('contact.phonePlaceholder')}
            {...register("phone")}
          />
        </div>

        <div>
          <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
            {t('contact.subject')} *
          </label>
          <Input
            id="subject"
            placeholder={t('contact.subjectPlaceholder')}
            {...register("subject", { required: t('contact.subjectRequired') })}
            className={errors.subject ? "border-red-500" : ""}
          />
          {errors.subject && (
            <p className="mt-1 text-sm text-red-600">{errors.subject.message}</p>
          )}
        </div>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
          {t('contact.message')} *
        </label>
        <Textarea
          id="message"
          rows={5}
          placeholder={t('contact.messagePlaceholder')}
          {...register("message", { required: t('contact.messageRequired') })}
          className={errors.message ? "border-red-500" : ""}
        />
        {errors.message && (
          <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>
        )}
      </div>

      <Button 
        type="submit" 
        className="w-full bg-novella-red hover:bg-red-700 text-white"
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            {t('contact.sending')}
          </>
        ) : t('contact.sendMessageBtn')}
      </Button>
    </form>
  );
};

export default ContactForm;
