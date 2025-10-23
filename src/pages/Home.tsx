import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Loader2, Cpu, Monitor, HardDrive, Zap, Check } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Home = () => {
  const [userInput, setUserInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [recommendation, setRecommendation] = useState<any>(null);
  const { toast } = useToast();

  const handleAnalyze = async () => {
    if (!userInput.trim()) {
      toast({
        title: "Champ vide",
        description: "Veuillez décrire votre usage pour obtenir une recommandation.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    
    // Simulation IA pour l'instant
    setTimeout(() => {
      setRecommendation({
        cpu: "Intel Core i7-13700K ou AMD Ryzen 7 7700X",
        gpu: "NVIDIA RTX 4070 12GB",
        ram: "32 GB DDR5 5600MHz",
        ssd: "1 TB NVMe Gen4",
        ecran: "27\" QHD 165Hz IPS",
        budget: "1800-2200€",
        usage: userInput,
      });
      setIsLoading(false);
      
      toast({
        title: "Analyse terminée !",
        description: "Votre configuration idéale est prête.",
      });
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-surface">
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 text-center animate-fade-in">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-accent px-4 py-2 rounded-full text-accent-foreground text-sm font-medium mb-6">
            <Zap className="w-4 h-4" />
            Propulsé par l'Intelligence Artificielle
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-hero bg-clip-text text-transparent">
            maconfig
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Trouvez la configuration parfaite, sans parler technique.
          </p>
          
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary-hover text-primary-foreground px-8 py-6 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all"
            onClick={() => document.getElementById('ai-section')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Commencer maintenant
          </Button>
        </div>
      </section>

      {/* Explication - 3 étapes */}
      <section className="py-16 px-4 bg-surface/50 animate-slide-up">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Comment ça marche ?</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Monitor className="w-8 h-8" />,
                title: "1. Décrivez votre usage",
                description: "Expliquez simplement ce que vous faites : gaming, montage, bureautique..."
              },
              {
                icon: <Cpu className="w-8 h-8" />,
                title: "2. L'IA analyse",
                description: "Notre intelligence artificielle évalue vos besoins et trouve la config optimale."
              },
              {
                icon: <Check className="w-8 h-8" />,
                title: "3. Recevez votre config",
                description: "Obtenez une recommandation détaillée avec tous les composants adaptés."
              }
            ].map((step, idx) => (
              <Card 
                key={idx} 
                className="p-8 text-center hover-lift border-0 bg-gradient-card"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 text-primary rounded-2xl mb-4">
                  {step.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Section IA Interactive */}
      <section id="ai-section" className="py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <Card className="p-8 border-0 shadow-xl bg-gradient-card">
            <h2 className="text-2xl font-bold mb-6 text-center">Décrivez votre utilisation</h2>
            
            <Textarea
              placeholder="Exemple : Je fais du montage vidéo 4K, je joue à des jeux récents en haute qualité, et j'utilise Photoshop quotidiennement..."
              className="min-h-[150px] mb-4 text-base resize-none border-2 focus:border-primary rounded-xl"
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              disabled={isLoading}
            />
            
            <Button
              onClick={handleAnalyze}
              disabled={isLoading}
              className="w-full bg-primary hover:bg-primary-hover text-primary-foreground py-6 text-lg rounded-xl shadow-lg"
            >
              {isLoading ? (
                <>
                  <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                  Analyse en cours...
                </>
              ) : (
                "Trouver ma config"
              )}
            </Button>
          </Card>

          {/* Résultat */}
          {recommendation && (
            <Card className="mt-8 p-8 border-0 shadow-xl bg-gradient-card animate-fade-in">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <Check className="w-6 h-6 text-primary" />
                Votre configuration idéale
              </h3>
              
              <div className="space-y-4">
                {[
                  { icon: <Cpu className="w-5 h-5" />, label: "Processeur", value: recommendation.cpu },
                  { icon: <Monitor className="w-5 h-5" />, label: "Carte graphique", value: recommendation.gpu },
                  { icon: <HardDrive className="w-5 h-5" />, label: "Mémoire RAM", value: recommendation.ram },
                  { icon: <HardDrive className="w-5 h-5" />, label: "Stockage", value: recommendation.ssd },
                  { icon: <Monitor className="w-5 h-5" />, label: "Écran", value: recommendation.ecran },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-4 p-4 bg-surface/50 rounded-lg">
                    <div className="text-primary mt-1">{item.icon}</div>
                    <div>
                      <p className="font-semibold text-sm text-muted-foreground">{item.label}</p>
                      <p className="text-base">{item.value}</p>
                    </div>
                  </div>
                ))}
                
                <div className="mt-6 p-4 bg-accent rounded-lg">
                  <p className="font-semibold text-accent-foreground">Budget estimé</p>
                  <p className="text-2xl font-bold text-primary">{recommendation.budget}</p>
                </div>
              </div>
            </Card>
          )}
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 px-4 text-center bg-surface/50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">
            Prêt à trouver votre configuration parfaite ?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Laissez notre IA vous guider vers le meilleur choix.
          </p>
          <Button
            size="lg"
            className="bg-primary hover:bg-primary-hover text-primary-foreground px-8 py-6 text-lg rounded-xl shadow-lg"
            onClick={() => document.getElementById('ai-section')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Lancer l'assistant IA
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-border bg-surface">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>© 2025 maconfig - Tous droits réservés</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-primary transition-colors">Mentions légales</a>
            <a href="#" className="hover:text-primary transition-colors">Contact</a>
            <a href="/admin" className="hover:text-primary transition-colors font-medium">Admin</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
