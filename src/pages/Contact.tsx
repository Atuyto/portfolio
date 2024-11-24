import { Mail, MessageSquare, Send } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    toast.success("Message sent successfully!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="page-transition min-h-screen pt-24">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <span className="inline-block px-3 py-1 rounded-full text-sm bg-primary/10 text-primary mb-4">
            Contact
          </span>
          <h1 className="text-4xl font-bold mb-6">Get in Touch</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="glass-card rounded-lg p-6">
              <Mail className="w-8 h-8 text-primary mb-4" />
              <h2 className="text-xl font-semibold mb-2">Email</h2>
              <p className="text-muted-foreground">your@email.com</p>
            </div>
            <div className="glass-card rounded-lg p-6">
              <MessageSquare className="w-8 h-8 text-primary mb-4" />
              <h2 className="text-xl font-semibold mb-2">Social</h2>
              <p className="text-muted-foreground">@yourusername</p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="glass-card rounded-lg p-6">
            <div className="grid grid-cols-1 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-2 rounded-lg bg-secondary/50 border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-2 rounded-lg bg-secondary/50 border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={4}
                  className="w-full px-4 py-2 rounded-lg bg-secondary/50 border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors resize-none"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
              >
                Send Message <Send className="w-4 h-4" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;