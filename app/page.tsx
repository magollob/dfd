"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { DollarSign, Palette, Headphones, Instagram, Users, Target, Award } from "lucide-react"

export default function RaspadinhaLanding() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-700 to-blue-500">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 py-20">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/90 via-blue-700/80 to-blue-500/70"></div>
        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left space-y-6">
            <div className="mb-6">
              <Image
                src="/images/logo-oficial.png"
                alt="Raspadinha da Sorte Logo"
                width={200}
                height={160}
                className="mx-auto lg:mx-0"
              />
            </div>
            <div className="space-y-4">
              <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
                <span className="block drop-shadow-lg" style={{ textShadow: "0 0 15px #A7E300" }}>
                  Parceria Exclusiva para
                </span>
                <span className="block drop-shadow-lg text-lime-400" style={{ textShadow: "0 0 15px #A7E300" }}>
                  Influenciadores VIP
                </span>
              </h1>
              <p className="text-lg md:text-xl text-lime-400 font-semibold max-w-2xl mx-auto lg:mx-0">
                Ganhe até 15% de comissão promovendo a Raspadinha da Sorte 🍀
              </p>
              <div className="pt-4">
                <Button
                  size="lg"
                  className="bg-lime-400 hover:bg-lime-500 text-black font-bold text-lg px-6 py-3 rounded-2xl shadow-2xl transform hover:scale-105 transition-all duration-300"
                  style={{ boxShadow: "0 8px 25px rgba(167, 227, 0, 0.4)" }}
                  onClick={() => window.open("https://chat.whatsapp.com/EWJnbhlr0VkK0GSCJl05TP", "_blank")}
                >
                  Quero Ser Parceiro
                </Button>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="rounded-3xl overflow-hidden shadow-2xl border-2 border-lime-400/30">
              <Image
                src="/images/placeholder-afiliado.png"
                alt="Torne-se um Afiliado da Raspadinha da Sorte"
                width={600}
                height={750}
                className="w-auto h-auto max-w-full"
                style={{ objectFit: "contain" }}
              />
            </div>
          </div>
        </div>
        {/* Clover decorations */}
        <div className="absolute top-20 left-10 text-lime-400/30 text-6xl animate-pulse">🍀</div>
        <div className="absolute bottom-20 right-10 text-lime-400/30 text-4xl animate-pulse">🍀</div>
      </section>

      {/* About the Opportunity Section */}
      <section className="py-20 px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-800/50 to-blue-600/50"></div>
        <div className="absolute inset-0 opacity-10">
          <div className="text-lime-400 text-9xl absolute top-10 left-1/4">🍀</div>
          <div className="text-lime-400 text-9xl absolute bottom-10 right-1/4">🍀</div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="w-full h-96 rounded-3xl overflow-hidden shadow-2xl border-2 border-lime-400/30">
                <Image
                  src="/images/mockup-plataforma.jpeg"
                  alt="Mockup da Plataforma Raspadinha da Sorte"
                  width={600}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="order-1 lg:order-2 space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
                Uma Oportunidade <span className="text-lime-400">Única</span>
              </h2>
              <div className="space-y-4 text-lg text-white/90">
                <p className="leading-relaxed">
                  Nosso sistema de comissões oferece <span className="text-lime-400 font-bold">15% de retorno</span>{" "}
                  sobre cada jogador que você trouxer para a plataforma.
                </p>
                <p className="leading-relaxed">
                  Você recebe <span className="text-yellow-400 font-bold">saldo grátis para testes</span> e pode
                  experimentar nossa plataforma antes de promover.
                </p>
                <p className="leading-relaxed">
                  Fornecemos <span className="text-lime-400 font-bold">materiais promocionais prontos</span> para
                  facilitar sua divulgação nas redes sociais.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-blue-800 to-blue-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16">
            Benefícios <span className="text-lime-400">Exclusivos</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <DollarSign className="w-12 h-12" />,
                title: "Comissão Inicial de 15%",
                description: "Ganhe 15% sobre cada jogador ativo que você trouxer",
              },
              {
                icon: <span className="text-4xl">🎁</span>,
                title: "Saldo Grátis para Testes",
                description: "Teste nossa plataforma com saldo gratuito antes de promover",
              },
              {
                icon: <Palette className="w-12 h-12" />,
                title: "Materiais de Divulgação Prontos",
                description: "Receba artes, vídeos e textos prontos para suas redes",
              },
              {
                icon: <Headphones className="w-12 h-12" />,
                title: "Suporte Exclusivo e Monitoramento",
                description: "Acompanhamento personalizado dos seus resultados",
              },
            ].map((benefit, index) => (
              <Card
                key={index}
                className="bg-gradient-to-br from-blue-700/50 to-blue-600/50 border-lime-400/30 backdrop-blur-sm hover:scale-105 transition-transform duration-300"
              >
                <CardContent className="p-6 text-center space-y-4">
                  <div className="text-lime-400 flex justify-center">{benefit.icon}</div>
                  <h3 className="text-xl font-bold text-white">{benefit.title}</h3>
                  <p className="text-white/80">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Earnings Potential Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-900 to-blue-700">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              Potencial de <span className="text-lime-400">Ganhos</span>
            </h2>
            <p className="text-lg text-white/80">Veja quanto você pode ganhar mensalmente por jogadors que gastarem até R$200,00 por mês.           </p>
          </div>

          {/* Mobile Optimized Cards */}
          <div className="space-y-4 md:space-y-6">
            <div className="bg-gradient-to-r from-lime-400/20 to-yellow-400/20 p-4 md:p-6 rounded-2xl border border-lime-400/30">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <Users className="w-6 h-6 text-lime-400" />
                  <span className="text-white font-semibold">10 jogadores</span>
                </div>
                <span className="text-lime-400 text-xl md:text-2xl font-bold">R$ 300/mês</span>
              </div>
            </div>

            <div className="bg-gradient-to-r from-lime-400/30 to-yellow-400/30 p-4 md:p-6 rounded-2xl border border-lime-400/40 relative">
              <div className="absolute -top-2 left-1/2 transform -translate-x-1/2">
                <span className="bg-lime-400 text-black text-xs font-bold px-3 py-1 rounded-full">POPULAR</span>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <Target className="w-6 h-6 text-lime-400" />
                  <span className="text-white font-semibold">50 jogadores</span>
                </div>
                <span className="text-lime-400 text-xl md:text-2xl font-bold">R$ 1.500/mês</span>
              </div>
            </div>

            <div className="bg-gradient-to-r from-lime-400/40 to-yellow-400/40 p-4 md:p-6 rounded-2xl border border-lime-400/50">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <Award className="w-6 h-6 text-yellow-400" />
                  <span className="text-white font-semibold">200 jogadores</span>
                </div>
                <span className="text-yellow-400 text-xl md:text-2xl font-bold">R$ 6.000/mês</span>
              </div>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="mt-8 bg-gradient-to-r from-blue-800/50 to-blue-700/50 rounded-2xl p-6 border border-lime-400/20">
            <div className="text-center">
              <h3 className="text-xl font-bold text-white mb-4">
                💰 <span className="text-lime-400">Sem Limites</span>
              </h3>
              <div className="grid grid-cols-2 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-lime-400">15%</div>
                  <div className="text-sm text-white/80">Comissão</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-yellow-400">20%</div>
                  <div className="text-sm text-white/80">Premium</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="py-16 px-4 bg-gradient-to-r from-blue-900 to-blue-800">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="flex justify-center mb-8">
            <Image
              src="/images/logo-oficial.png"
              alt="Raspadinha da Sorte"
              width={80}
              height={80}
              className="rounded-xl"
            />
          </div>

          <div className="space-y-4 text-white">
            <div className="flex items-center justify-center gap-3 text-xl">
              <Instagram className="w-6 h-6 text-lime-400" />
              <span>@raspadinhadasortebr</span>
            </div>
            <div className="text-lg">raspadinhadasortebr.com</div>
          </div>

          <Button
            size="lg"
            className="bg-green-600 hover:bg-green-700 text-white font-bold text-lg px-8 py-4 rounded-2xl shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center gap-3 mx-auto"
            onClick={() => window.open("https://chat.whatsapp.com/EWJnbhlr0VkK0GSCJl05TP", "_blank")}
          >
            <Image src="/images/whatsapp-icon.png" alt="WhatsApp" width={24} height={24} />
            Grupo de Influenciadores VIP
          </Button>

          <div className="pt-8 border-t border-white/20 text-white/60">
            <p>&copy; 2024 Raspadinha da Sorte. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>

      {/* FAQ Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-blue-800 to-blue-900">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-start gap-8">
            <div className="flex-1">
              <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-12">
                Perguntas <span className="text-lime-400">Frequentes</span>
              </h2>
              <Accordion type="single" collapsible className="space-y-4">
                <AccordionItem value="item-1" className="bg-blue-700/50 rounded-xl border border-lime-400/20">
                  <AccordionTrigger className="text-white hover:text-lime-400 px-6 text-lg font-semibold">
                    Preciso investir para participar?
                  </AccordionTrigger>
                  <AccordionContent className="text-white/80 px-6 pb-4">
                    Não! Nossa parceria é 100% gratuita. Você recebe saldo grátis para testar a plataforma e só ganha
                    quando seus indicados jogam.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2" className="bg-blue-700/50 rounded-xl border border-lime-400/20">
                  <AccordionTrigger className="text-white hover:text-lime-400 px-6 text-lg font-semibold">
                    Quando recebo minhas comissões?
                  </AccordionTrigger>
                  <AccordionContent className="text-white/80 px-6 pb-4">
                    As comissões são calculadas semanalmente e pagas via PIX toda segunda-feira, com valor mínimo de R$
                    50.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3" className="bg-blue-700/50 rounded-xl border border-lime-400/20">
                  <AccordionTrigger className="text-white hover:text-lime-400 px-6 text-lg font-semibold">
                    Posso aumentar minha comissão?
                  </AccordionTrigger>
                  <AccordionContent className="text-white/80 px-6 pb-4">
                    Sim! Influenciadores que trazem mais de 100 jogadores ativos podem negociar comissões de até 20%.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4" className="bg-blue-700/50 rounded-xl border border-lime-400/20">
                  <AccordionTrigger className="text-white hover:text-lime-400 px-6 text-lg font-semibold">
                    Como acompanho meus ganhos?
                  </AccordionTrigger>
                  <AccordionContent className="text-white/80 px-6 pb-4">
                    Você terá acesso a um dashboard exclusivo com relatórios em tempo real de seus indicados e ganhos.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
            <div className="hidden lg:block">
              <div className="w-32 h-32 bg-gradient-to-br from-lime-400/20 to-blue-600/20 rounded-2xl border border-lime-400/30 flex items-center justify-center">
                <div className="text-center text-white/50">
                  <span className="text-3xl">❓</span>
                  <p className="text-xs mt-1">FAQ</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
