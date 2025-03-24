import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog";
import { X } from "lucide-react";

interface ContactFormProps {
  buttonVariant?: "default" | "outline" | "ghost";
  buttonClassName?: string;
  buttonText?: string;
}

export default function ContactForm({
  buttonVariant = "outline",
  buttonClassName = "border-blue-600 text-blue-600 hover:bg-blue-50",
  buttonText = "Contact Us",
}: ContactFormProps) {
  const [open, setOpen] = useState(false);
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormState((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      // In a real implementation, you would send this data to your backend
      // For now, we'll simulate a successful submission
      console.log(
        `Sending email to alfthr378@gmail.com with form data:`,
        formState,
      );

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Reset form and show success message
      setFormState({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
      setIsSuccess(true);

      // Close the dialog after 3 seconds
      setTimeout(() => {
        setIsSuccess(false);
        setOpen(false);
      }, 3000);
    } catch (err) {
      setError("There was an error sending your message. Please try again.");
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant={buttonVariant} className={buttonClassName}>
          {buttonText}
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <div className="flex items-center justify-between">
            <DialogTitle className="text-xl font-semibold text-blue-900">
              Contact Us
            </DialogTitle>
          </div>
          <DialogDescription>
            Send us a message and we'll get back to you as soon as possible.
          </DialogDescription>
        </DialogHeader>

        {isSuccess ? (
          <div className="p-4 bg-green-50 border border-green-200 rounded-md text-green-800 mb-4">
            <p className="font-medium">Message sent successfully!</p>
            <p className="text-sm">
              Thank you for contacting us. We'll respond to your inquiry soon.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 gap-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Your Name
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formState.name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  required
                  className="w-full"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Email Address
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formState.email}
                  onChange={handleChange}
                  placeholder="your.email@example.com"
                  required
                  className="w-full"
                />
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Subject
                </label>
                <Input
                  id="subject"
                  name="subject"
                  value={formState.subject}
                  onChange={handleChange}
                  placeholder="What is your message about?"
                  required
                  className="w-full"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  placeholder="Please provide details about your inquiry..."
                  required
                  className="w-full min-h-[120px]"
                />
              </div>
            </div>

            {error && (
              <div className="p-3 bg-red-50 border border-red-200 rounded-md text-red-800 text-sm">
                {error}
              </div>
            )}

            <DialogFooter>
              <Button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </DialogFooter>
          </form>
        )}

        <div className="mt-4 text-xs text-gray-500 text-center">
          Your message will be sent to{" "}
          <span className="font-medium">alfthr378@gmail.com</span>
        </div>
      </DialogContent>
    </Dialog>
  );
}
