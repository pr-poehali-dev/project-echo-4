import { Flame, Leaf, ShieldCheck, Wallet, Truck, Plus, Minus, Mail, Phone } from "lucide-react"
import Icon from "@/components/ui/icon"
import { Button } from "@/components/ui/button"
import { useState } from "react"

const CONTACT_URL = "https://functions.poehali.dev/d65b5a4d-1a58-4531-a7aa-9dbdceda502c"

interface FAQ {
  question: string
  answer: string
}

const Index = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [formData, setFormData] = useState({ name: "", phone: "", message: "" })
  const [formStatus, setFormStatus] = useState<"idle" | "loading" | "success" | "error">("idle")

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setFormStatus("loading")
    try {
      const res = await fetch(CONTACT_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })
      if (res.ok) {
        setFormStatus("success")
        setFormData({ name: "", phone: "", message: "" })
      } else {
        setFormStatus("error")
      }
    } catch {
      setFormStatus("error")
    }
  }

  const faqs: FAQ[] = [
    {
      question: "Что такое пеллеты и чем они лучше дров?",
      answer:
        "Пеллеты — это спрессованные гранулы из древесных отходов и сельскохозяйственной биомассы. В отличие от дров, они имеют стандартизированную влажность (до 8–10%), высокую теплоотдачу и удобны для автоматической подачи в котёл. Одна тонна пеллет заменяет около 500 л дизельного топлива.",
    },
    {
      question: "Какой объём можно заказать — минимум для закупки?",
      answer:
        "Мы работаем как с оптовыми, так и с розничными покупателями. Минимальный заказ обсуждается индивидуально. Позвоните менеджеру по номеру 8-902-888-78-91 — мы подберём оптимальные условия под ваш объём.",
    },
    {
      question: "Почему выгодно закупать пеллеты летом?",
      answer:
        "Летом цены традиционно ниже, а запасы склада полные. Вы фиксируете цену, избегаете ажиотажа перед отопительным сезоном и гарантированно получаете нужный объём к холодам. Это самая разумная стратегия для крупных закупок.",
    },
    {
      question: "Как осуществляется доставка?",
      answer:
        "Мы доставляем пеллеты по всей России. Условия доставки (сроки, стоимость, транспорт) обсуждаются с менеджером при оформлении заказа. Работаем с транспортными компаниями и собственным автопарком.",
    },
  ]

  return (
    <div className="min-h-screen bg-[#0B0F12] text-white">
      {/* Hero Section */}
      <div className="relative min-h-screen">
        {/* Background Image with Overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url(https://cdn.poehali.dev/projects/3813c157-611e-45da-aee0-cf85d544db54/bucket/8e321b95-6014-4256-afbb-dd5577b4e686.jpg)",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/85" />
        </div>

        {/* Navigation */}
        <nav className="relative z-10 flex items-center justify-between p-6">
          {/* Logo */}
          <div className="flex items-center gap-2 px-4 py-2 bg-black/40 ring-1 ring-white/20 backdrop-blur rounded-full">
            <Flame className="w-5 h-5 text-orange-400" />
            <span className="font-medium text-balance">ООО ЛАГУНА</span>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-1">
            {["О пеллетах", "Преимущества", "Как купить", "Вопросы", "Контакты"].map((item) => (
              <a
                key={item}
                href="#"
                className="px-4 py-2 bg-black/40 ring-1 ring-white/20 backdrop-blur rounded-full hover:bg-black/50 transition-colors"
              >
                {item}
              </a>
            ))}
          </div>

          {/* Action Button */}
          <div className="flex items-center gap-3">
            <a
              href="tel:89028887891"
              className="px-4 py-2 bg-black/40 ring-1 ring-white/20 backdrop-blur rounded-full hover:bg-black/50 transition-colors"
            >
              8-902-888-78-91
            </a>
            <Button className="bg-white text-black hover:bg-white/90 rounded-full px-6">Получить предложение</Button>
          </div>
        </nav>

        {/* Hero Content */}
        <div className="relative z-10 flex flex-col items-center justify-center min-h-[calc(100vh-120px)] px-6 text-center">
          {/* Badge */}
          <div className="mb-6 px-4 py-2 bg-black/40 ring-1 ring-white/20 backdrop-blur rounded-full">
            <span className="text-sm font-medium">Надёжный поставщик биотоплива в России</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-6xl md:text-8xl font-light tracking-tight mb-6 text-balance">
            Пеллеты — топливо будущего.
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-white/90 max-w-4xl mb-12 leading-relaxed text-pretty">
            Экологичное, возобновляемое биотопливо с высокой теплоотдачей. Поможем подготовиться к холодам — качественные поставки по всей России.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <Button size="lg" className="bg-white text-black hover:bg-white/90 rounded-full px-8 py-4 text-lg">
              Получить предложение
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-black/40 ring-1 ring-white/20 backdrop-blur border-0 text-white hover:bg-black/50 rounded-full px-8 py-4 text-lg"
            >
              Узнать о пеллетах
            </Button>
          </div>

          {/* Footer Note */}
          <div className="flex items-center gap-2 px-4 py-2 bg-black/40 ring-1 ring-white/20 backdrop-blur rounded-full">
            <Leaf className="w-4 h-4 text-green-400" />
            <span className="text-sm font-medium">Экологичность — наш приоритет</span>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <section className="relative z-10 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
            {/* Eco */}
            <div className="rounded-2xl bg-black/20 ring-1 ring-white/15 backdrop-blur p-8 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-black/30 ring-1 ring-white/20 mb-6">
                <Leaf className="w-6 h-6 text-green-400" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Экологичность</h3>
              <p className="text-white/80 leading-relaxed">Снижение выбросов CO₂ по сравнению с ископаемым топливом. Чистое горение без токсичных отходов.</p>
            </div>

            {/* Economy */}
            <div className="rounded-2xl bg-black/20 ring-1 ring-white/15 backdrop-blur p-8 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-black/30 ring-1 ring-white/20 mb-6">
                <Wallet className="w-6 h-6 text-yellow-400" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Экономия</h3>
              <p className="text-white/80 leading-relaxed">Ощутимое снижение затрат на отопление. Особенно выгодные условия при летних закупках.</p>
            </div>

            {/* Quality */}
            <div className="rounded-2xl bg-black/20 ring-1 ring-white/15 backdrop-blur p-8 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-black/30 ring-1 ring-white/20 mb-6">
                <ShieldCheck className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Гарантия качества</h3>
              <p className="text-white/80 leading-relaxed">Проверенные поставки, разные фракции и классы пеллет. Работаем с оптом и розницей.</p>
            </div>

            {/* Delivery */}
            <div className="rounded-2xl bg-black/20 ring-1 ring-white/15 backdrop-blur p-8 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-black/30 ring-1 ring-white/20 mb-6">
                <Truck className="w-6 h-6 text-orange-400" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Быстрая доставка</h3>
              <p className="text-white/80 leading-relaxed">Постоянные запасы на складе, доставка по всей России в удобные сроки.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="relative z-10 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Наше производство</h2>
            <p className="text-xl text-white/80">Собственный завод, современное оборудование, контроль качества на каждом этапе</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="md:col-span-2 md:row-span-2 rounded-2xl overflow-hidden h-64 md:h-auto">
              <img
                src="https://cdn.poehali.dev/projects/3813c157-611e-45da-aee0-cf85d544db54/bucket/8e321b95-6014-4256-afbb-dd5577b4e686.jpg"
                alt="Производство пеллет"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="rounded-2xl overflow-hidden h-48">
              <img
                src="https://cdn.poehali.dev/projects/3813c157-611e-45da-aee0-cf85d544db54/bucket/fbd67a00-db39-46db-bce5-a78c82f28389.jpg"
                alt="Склад пеллет"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="rounded-2xl overflow-hidden h-48">
              <img
                src="https://cdn.poehali.dev/projects/3813c157-611e-45da-aee0-cf85d544db54/bucket/986b3b20-3b04-4a73-9afd-e9ea58a8e738.jpg"
                alt="Оборудование"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="rounded-2xl overflow-hidden h-48">
              <img
                src="https://cdn.poehali.dev/projects/3813c157-611e-45da-aee0-cf85d544db54/bucket/a2297ad5-aaf5-433e-a496-7addeb90f6c2.jpg"
                alt="Пеллеты крупным планом"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="rounded-2xl overflow-hidden h-48">
              <img
                src="https://cdn.poehali.dev/projects/3813c157-611e-45da-aee0-cf85d544db54/bucket/b3824584-eef3-42ad-bdd2-b444cd2f310f.jpg"
                alt="Пеллеты с листком"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* How to Buy Section */}
      <section className="relative z-10 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="rounded-3xl bg-white/5 ring-1 ring-white/10 backdrop-blur p-12">
            {/* Section Header */}
            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-6xl font-bold tracking-tight mb-6 text-balance">Как купить пеллеты</h2>
              <p className="text-xl text-white/80 max-w-3xl mx-auto text-pretty">
                Три простых шага — и топливо уже едет к вам.
              </p>
            </div>

            {/* Steps */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 backdrop-blur p-8 h-72 flex flex-col">
                <div className="flex-1">
                  <div className="text-3xl font-bold text-white/60 mb-4">01.</div>
                  <h3 className="text-xl font-semibold mb-4">Связаться с менеджером</h3>
                  <p className="text-white/80 leading-relaxed text-sm">
                    Позвоните по номеру 8-902-888-78-91 или напишите на gogivna@mail.ru. Мы готовы ответить на все ваши вопросы.
                  </p>
                </div>
              </div>

              <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 backdrop-blur p-8 h-72 flex flex-col">
                <div className="flex-1">
                  <div className="text-3xl font-bold text-white/60 mb-4">02.</div>
                  <h3 className="text-xl font-semibold mb-4">Обсудить объём и условия</h3>
                  <p className="text-white/80 leading-relaxed text-sm">
                    Уточним нужный объём, фракцию, класс пеллет, сроки и условия доставки. Подготовим индивидуальное предложение.
                  </p>
                </div>
              </div>

              <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 backdrop-blur p-8 h-72 flex flex-col">
                <div className="flex-1">
                  <div className="text-3xl font-bold text-white/60 mb-4">03.</div>
                  <h3 className="text-xl font-semibold mb-4">Получить выгодное предложение</h3>
                  <p className="text-white/80 leading-relaxed text-sm">
                    Вы получаете конкурентную цену, гарантию качества и своевременную доставку. Готовьтесь к зиме заранее!
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="text-center">
              <Button
                size="lg"
                className="bg-white text-black hover:bg-white/90 rounded-full px-12 py-4 text-lg font-semibold"
              >
                Получить предложение
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="relative z-10 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="rounded-3xl bg-white/5 ring-1 ring-white/10 backdrop-blur p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              {/* Left Column */}
              <div>
                <h2 className="text-5xl md:text-6xl font-bold tracking-tight mb-6 text-balance">
                  Частые вопросы
                </h2>
                <p className="text-xl text-white/80 leading-relaxed text-pretty">
                  Всё, что нужно знать о пеллетах, закупках и доставке от ООО ЛАГУНА.
                </p>
              </div>

              {/* Right Column - FAQ Accordion */}
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <div
                    key={index}
                    className="rounded-2xl bg-white/5 ring-1 ring-white/10 backdrop-blur overflow-hidden"
                  >
                    <button
                      onClick={() => toggleFaq(index)}
                      className="w-full p-6 text-left flex items-center justify-between hover:bg-white/5 transition-colors"
                    >
                      <h3 className="text-lg font-semibold pr-4">{faq.question}</h3>
                      {openFaq === index ? (
                        <Minus className="w-5 h-5 flex-shrink-0" />
                      ) : (
                        <Plus className="w-5 h-5 flex-shrink-0" />
                      )}
                    </button>
                    {openFaq === index && (
                      <div className="px-6 pb-6">
                        <p className="text-white/80 leading-relaxed">{faq.answer}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="relative z-10 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="rounded-3xl bg-black/20 ring-1 ring-white/15 backdrop-blur p-12">
            {/* Section Header */}
            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-6xl font-bold tracking-tight mb-6 text-balance">Свяжитесь с нами</h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              {/* Left Column - Contact Form */}
              <div className="rounded-2xl bg-white/95 text-black p-8 shadow-2xl">
                <h3 className="text-2xl font-bold mb-6">Отправить запрос</h3>
                {formStatus === "success" ? (
                  <div className="text-center py-10">
                    <div className="text-4xl mb-4">✅</div>
                    <h4 className="text-xl font-bold mb-2">Заявка отправлена!</h4>
                    <p className="text-gray-600">Менеджер свяжется с вами в ближайшее время.</p>
                    <Button
                      className="mt-6 bg-black text-white hover:bg-gray-800 rounded-lg"
                      onClick={() => setFormStatus("idle")}
                    >
                      Отправить ещё
                    </Button>
                  </div>
                ) : (
                  <form className="space-y-6" onSubmit={handleSubmit}>
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">
                        Имя
                      </label>
                      <input
                        type="text"
                        id="name"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                        placeholder="Ваше имя"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium mb-2">
                        Телефон
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                        placeholder="+7 (___) ___-__-__"
                      />
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium mb-2">
                        Сообщение
                      </label>
                      <textarea
                        id="message"
                        rows={5}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent resize-none"
                        placeholder="Расскажите об объёме и условиях..."
                      />
                    </div>
                    {formStatus === "error" && (
                      <p className="text-red-500 text-sm">Ошибка отправки. Попробуйте ещё раз или позвоните нам.</p>
                    )}
                    <Button
                      type="submit"
                      disabled={formStatus === "loading"}
                      className="w-full bg-black text-white hover:bg-gray-800 rounded-lg py-3 font-normal text-base"
                    >
                      {formStatus === "loading" ? "Отправляем..." : "Отправить сообщение"}
                    </Button>
                  </form>
                )}
              </div>

              {/* Right Column - Contact Info */}
              <div className="space-y-8">
                <div>
                  <p className="text-xl text-white/90 leading-relaxed text-pretty">
                    По вопросам поставок, объёмов и условий сотрудничества — свяжитесь с нашим менеджером. Ответим быстро и подготовим выгодное предложение.
                  </p>
                </div>

                {/* Contact Card */}
                <div className="rounded-2xl bg-white/95 text-black p-6 shadow-2xl space-y-4">
                  <div>
                    <h4 className="text-lg font-semibold mb-1">ООО ЛАГУНА</h4>
                    <p className="text-gray-600 text-sm">Поставщик биотоплива</p>
                  </div>
                  <a
                    href="tel:89028887891"
                    className="flex items-center gap-3 text-black hover:text-orange-600 transition-colors"
                  >
                    <Phone className="w-5 h-5" />
                    <span className="font-medium">8-902-888-78-91</span>
                  </a>
                  <a
                    href="mailto:gogivna@mail.ru"
                    className="flex items-center gap-3 text-black hover:text-orange-600 transition-colors"
                  >
                    <Mail className="w-5 h-5" />
                    <span className="font-medium">gogivna@mail.ru</span>
                  </a>
                  <a href="tel:89028887891" className="block w-full mt-2">
                    <Button className="w-full bg-black text-white hover:bg-gray-800 rounded-lg flex items-center justify-center gap-2">
                      <Phone className="w-4 h-4" />
                      Позвонить
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="rounded-3xl bg-white/[0.03] backdrop-blur-2xl ring-1 ring-white/10 p-12">
            {/* Main Footer Content */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
              {/* Brand Section */}
              <div className="lg:col-span-2">
                <div className="flex items-center gap-2 mb-6">
                  <Flame className="w-6 h-6 text-orange-400" />
                  <span className="text-xl font-semibold">ООО ЛАГУНА</span>
                </div>
                <p className="text-white/80 leading-relaxed text-pretty">
                  Надёжный поставщик высококачественного биотоплива в России. Круглогодичные поставки пеллет для частных и корпоративных клиентов.
                </p>
              </div>

              {/* Product Links */}
              <div>
                <h3 className="text-sm font-bold uppercase tracking-wider mb-6">ПРОДУКЦИЯ</h3>
                <ul className="space-y-3">
                  {["О пеллетах", "Ассортимент", "Цены", "Доставка"].map((item) => (
                    <li key={item}>
                      <a href="#" className="text-white/70 hover:text-white transition-colors text-sm leading-relaxed">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Support Links */}
              <div>
                <h3 className="text-sm font-bold uppercase tracking-wider mb-6">КОМПАНИЯ</h3>
                <ul className="space-y-3">
                  {["О компании", "Качество", "Контакты", "Вопросы и ответы"].map((item) => (
                    <li key={item}>
                      <a href="#" className="text-white/70 hover:text-white transition-colors text-sm leading-relaxed">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Newsletter Section */}
            <div className="border-t border-white/10 pt-12 mb-12">
              <div className="max-w-md">
                <h3 className="text-lg font-semibold mb-4">Следите за ценами и акциями</h3>
                <div className="flex gap-3">
                  <input
                    type="email"
                    placeholder="Введите ваш email"
                    className="flex-1 px-4 py-3 rounded-lg bg-white/5 ring-1 ring-white/20 backdrop-blur border-0 text-white placeholder:text-white/50 focus:ring-2 focus:ring-white/30 focus:outline-none"
                  />
                  <Button className="bg-white text-black hover:bg-white/90 rounded-lg px-6 h-[50px]">Подписаться</Button>
                </div>
              </div>
            </div>

            {/* Sub-footer */}
            <div className="border-t border-white/10 pt-8">
              <p className="text-white/60 text-sm text-center">© 2026 ООО ЛАГУНА — Экологичное топливо</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Index