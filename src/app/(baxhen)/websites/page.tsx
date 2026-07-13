import React from 'react'
import type { Metadata } from 'next'
import { Container } from '@/views/primitives/Container'
import { Heading } from '@/views/primitives/Heading'
import { Text } from '@/views/primitives/Text'
import { Button } from '@/views/primitives/Button'
import { Stack } from '@/views/primitives/Stack'
import { Grid } from '@/views/primitives/Grid'
import { Badge } from '@/views/primitives/Badge'
import { Wrench, Globe, TrendingUp, Shield, Zap, ChevronRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Websites Profissionais — Baxhen',
  description:
    'Websites empresariais e páginas de geração de leads para pequenas e médias empresas. Suporte em português e inglês. Plano anual de infraestrutura.',
}

const services = [
  { title: 'Business Presence', description: 'Websites multi-página para apresentar o seu negócio, produtos e serviços com credibilidade profissional.' },
  { title: 'Lead Generation', description: 'Landing pages focadas em conversão — ideal para campanhas, serviços específicos e captação de leads qualificados.' },
  { title: 'Bilingual Support', description: 'Conteúdo em português e inglês com sistema de localização integrado — alcance clientes em múltiplos mercados.' },
  { title: 'Annual Infrastructure', description: 'Plano anual que inclui alojamento, manutenção, atualizações de segurança e suporte técnico contínuo.' },
]

const process = [
  { step: '01', title: 'Briefing', description: 'Compreendemos o seu negócio, objetivos e público-alvo.' },
  { step: '02', title: 'Design', description: 'Criamos o design alinhado com a sua marca e objetivos de conversão.' },
  { step: '03', title: 'Preview', description: 'Pré-visualiza o site num domínio privado antes do lançamento.' },
  { step: '04', title: 'Launch', description: 'Publicamos o site e monitorizamos o desempenho.' },
]

export default function BaxhenWebsitesPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#0e1417', color: '#dde3e7' }}>
      {/* Hero — stitch_designs: Professional Minimalism */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
        <div className="absolute inset-0 opacity-30" style={{ background: 'radial-gradient(circle at 50% 0%, #00d4ff 0%, transparent 60%)' }} />
        <Container>
          <div className="max-w-3xl mx-auto text-center relative z-10">
            <Badge variant="outline" className="mb-6">
              First 5 Clients — Limited Launch Offer
            </Badge>
            <Heading level="h1" size="display" className="mb-6">
              Websites that work for<br />your business
            </Heading>
            <Text variant="lead" className="mb-8 max-w-2xl mx-auto">
              Professional business-presence and lead-generation websites. Portuguese and English support. Annual infrastructure plan with optional custom development.
            </Text>
            <Stack gap="1rem" className="flex-row justify-center">
              <Button variant="primary" size="lg" href="/websites#contact">
                Get Started
                <ChevronRight size={20} className="ml-1" />
              </Button>
              <Button variant="outline" size="lg" href="/websites#process">
                How It Works
              </Button>
            </Stack>
          </div>
        </Container>
      </section>

      {/* Services — stitch_designs: Insights Cards */}
      <section id="services" className="py-20" style={{ backgroundColor: '#161d1f' }}>
        <Container>
          <div className="text-center mb-16">
            <Heading level="h2" size="lg">Website Solutions</Heading>
            <Text variant="lead" className="mt-4 max-w-xl mx-auto opacity-70">
              Uma plataforma. Dois tipos de website. Resultados consistentes.
            </Text>
          </div>
          <Grid cols={4} gap="1.5rem">
            {services.map((s, i) => (
              <div key={i} className="p-6 rounded-lg border" style={{ backgroundColor: '#1a2123', borderColor: 'rgba(63,164,184,0.15)' }}>
                <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4" style={{ backgroundColor: 'rgba(0,212,255,0.1)' }}>
                  {i === 0 && <Globe size={24} color="#00d4ff" />}
                  {i === 1 && <TrendingUp size={24} color="#00d4ff" />}
                  {i === 2 && <Globe size={24} color="#00d4ff" />}
                  {i === 3 && <Shield size={24} color="#00d4ff" />}
                </div>
                <Heading level="h3" size="sm" className="mb-2">{s.title}</Heading>
                <Text variant="small">{s.description}</Text>
              </div>
            ))}
          </Grid>
        </Container>
      </section>

      {/* Process — stitch_designs: Clean Steps */}
      <section id="process" className="py-20">
        <Container>
          <div className="text-center mb-16">
            <Heading level="h2" size="lg">From Preview to Launch</Heading>
            <Text variant="lead" className="mt-4 max-w-xl mx-auto opacity-70">
              Processo simples e transparente. Do briefing ao lançamento.
            </Text>
          </div>
          <Grid cols={4} gap="2rem">
            {process.map((p) => (
              <div key={p.step} className="text-center">
                <div className="text-4xl font-light mb-4" style={{ fontFamily: 'Literata, serif', color: '#00d4ff' }}>
                  {p.step}
                </div>
                <Heading level="h3" size="sm" className="mb-2">{p.title}</Heading>
                <Text variant="small">{p.description}</Text>
              </div>
            ))}
          </Grid>
        </Container>
      </section>

      {/* CTA — stitch_designs: Electric Focus */}
      <section className="py-20" style={{ backgroundColor: '#161d1f' }}>
        <Container>
          <div className="max-w-2xl mx-auto text-center">
            <Heading level="h2" size="lg" className="mb-4">
              Ready to launch your website?
            </Heading>
            <Text variant="lead" className="mb-8 opacity-70">
              Primeiros 5 clientes com condições especiais. Implementação do website sem custo adicional no plano anual de infraestrutura.
            </Text>
            <Button variant="primary" size="lg" href="/websites#contact">
              Talk to Us
            </Button>
          </div>
        </Container>
      </section>

      {/* Footer note */}
      <footer className="py-12 border-t" style={{ borderColor: 'rgba(133,147,152,0.2)' }}>
        <Container>
          <div className="text-center">
            <Text variant="small">
              &copy; {new Date().getFullYear()} Baxhen. Professional websites for small and medium businesses.
            </Text>
          </div>
        </Container>
      </footer>
    </div>
  )
}
