import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Lock, LogOut, Trash2, RefreshCw, ArrowLeft } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useNavigate } from "react-router-dom";

interface ConfigData {
  id: string;
  date: string;
  usage: string;
  cpu: string;
  gpu: string;
  budget: string;
}

const Admin = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [configs, setConfigs] = useState<ConfigData[]>([
    {
      id: "1",
      date: "2025-01-15",
      usage: "Gaming + Streaming",
      cpu: "Intel Core i9-13900K",
      gpu: "RTX 4080",
      budget: "2500-3000€",
    },
    {
      id: "2",
      date: "2025-01-14",
      usage: "Montage vidéo 4K",
      cpu: "AMD Ryzen 9 7950X",
      gpu: "RTX 4070 Ti",
      budget: "2200-2600€",
    },
  ]);
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleLogin = () => {
    if (password === "admin123") {
      setIsAuthenticated(true);
      toast({
        title: "Connexion réussie",
        description: "Bienvenue dans l'espace administrateur.",
      });
    } else {
      toast({
        title: "Erreur",
        description: "Mot de passe incorrect.",
        variant: "destructive",
      });
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setPassword("");
    toast({
      title: "Déconnexion",
      description: "Vous avez été déconnecté.",
    });
  };

  const handleDelete = (id: string) => {
    setConfigs(configs.filter((c) => c.id !== id));
    toast({
      title: "Supprimé",
      description: "Configuration supprimée avec succès.",
    });
  };

  const handleRefresh = () => {
    toast({
      title: "Mise à jour",
      description: "Modèles IA mis à jour avec succès.",
    });
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-background to-surface flex items-center justify-center p-4">
        <Card className="w-full max-w-md p-8 border-0 shadow-xl bg-gradient-card">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 text-primary rounded-2xl mb-4">
              <Lock className="w-8 h-8" />
            </div>
            <h1 className="text-2xl font-bold mb-2">Espace Administrateur</h1>
            <p className="text-muted-foreground">Connectez-vous pour accéder au dashboard</p>
          </div>

          <div className="space-y-4">
            <Input
              type="password"
              placeholder="Mot de passe"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleLogin()}
              className="text-base border-2 focus:border-primary rounded-xl"
            />
            <Button
              onClick={handleLogin}
              className="w-full bg-primary hover:bg-primary-hover text-primary-foreground py-6 rounded-xl"
            >
              Se connecter
            </Button>
            <Button
              variant="outline"
              onClick={() => navigate("/")}
              className="w-full rounded-xl"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Retour à l'accueil
            </Button>
          </div>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-surface">
      <div className="max-w-7xl mx-auto p-6">
        {/* Header */}
        <div className="flex justify-between items-center mb-8 animate-fade-in">
          <div>
            <h1 className="text-3xl font-bold mb-2">Dashboard Administrateur</h1>
            <p className="text-muted-foreground">Gestion des configurations générées</p>
          </div>
          <div className="flex gap-3">
            <Button
              variant="outline"
              onClick={handleRefresh}
              className="rounded-xl"
            >
              <RefreshCw className="w-4 h-4 mr-2" />
              Mettre à jour les modèles
            </Button>
            <Button
              variant="outline"
              onClick={() => navigate("/")}
              className="rounded-xl"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Retour à l'accueil
            </Button>
            <Button
              onClick={handleLogout}
              className="bg-destructive hover:bg-destructive/90 rounded-xl"
            >
              <LogOut className="w-4 h-4 mr-2" />
              Déconnexion
            </Button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-6 mb-8 animate-slide-up">
          {[
            { label: "Total configurations", value: configs.length, color: "text-primary" },
            { label: "Cette semaine", value: "12", color: "text-green-600" },
            { label: "Budget moyen", value: "2400€", color: "text-blue-600" },
          ].map((stat, idx) => (
            <Card key={idx} className="p-6 border-0 shadow-lg bg-gradient-card hover-lift">
              <p className="text-sm text-muted-foreground mb-1">{stat.label}</p>
              <p className={`text-3xl font-bold ${stat.color}`}>{stat.value}</p>
            </Card>
          ))}
        </div>

        {/* Table */}
        <Card className="border-0 shadow-xl bg-gradient-card animate-fade-in">
          <div className="p-6 border-b border-border">
            <h2 className="text-xl font-semibold">Configurations récentes</h2>
          </div>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Date</TableHead>
                <TableHead>Usage</TableHead>
                <TableHead>Processeur</TableHead>
                <TableHead>Carte graphique</TableHead>
                <TableHead>Budget</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {configs.map((config) => (
                <TableRow key={config.id}>
                  <TableCell className="font-medium">{config.date}</TableCell>
                  <TableCell>
                    <Badge variant="secondary" className="rounded-lg">
                      {config.usage}
                    </Badge>
                  </TableCell>
                  <TableCell>{config.cpu}</TableCell>
                  <TableCell>{config.gpu}</TableCell>
                  <TableCell className="font-semibold text-primary">{config.budget}</TableCell>
                  <TableCell className="text-right">
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => handleDelete(config.id)}
                      className="hover:bg-destructive/10 hover:text-destructive rounded-lg"
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Card>
      </div>
    </div>
  );
};

export default Admin;
