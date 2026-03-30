import { Flame, Leaf, ShieldCheck, Wallet, Truck, Plus, Minus, Mail, Phone, Menu, X } from "lucide-react"
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
  const [menuOpen, setMenuOpen] = useState(false)

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
        <nav className="relative z-10 flex items-center justify-between px-4 py-4 md:px-6 md:py-6">
          {/* Logo */}
          <div className="flex items-center gap-2 px-3 py-2 md:px-4 bg-black/40 ring-1 ring-white/20 backdrop-blur rounded-full">
            <Flame className="w-4 h-4 md:w-5 md:h-5 text-orange-400" />
            <span className="font-medium text-sm md:text-base">ООО ЛАГУНА</span>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-1">
            {["О пеллетах", "Преимущества", "Как купить", "Вопросы", "Контакты"].map((item) => (
              <a
                key={item}
                href="#"
                className="px-4 py-2 bg-black/40 ring-1 ring-white/20 backdrop-blur rounded-full hover:bg-black/50 transition-colors text-sm"
              >
                {item}
              </a>
            ))}
          </div>

          {/* Desktop Action Button */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="tel:89028887891"
              className="px-4 py-2 bg-black/40 ring-1 ring-white/20 backdrop-blur rounded-full hover:bg-black/50 transition-colors text-sm"
            >
              8-902-888-78-91
            </a>
            <Button className="bg-white text-black hover:bg-white/90 rounded-full px-6 text-sm">Получить предложение</Button>
          </div>

          {/* Mobile: phone + burger */}
          <div className="flex md:hidden items-center gap-2">
            <a
              href="tel:89028887891"
              className="flex items-center gap-1 px-3 py-2 bg-black/40 ring-1 ring-white/20 backdrop-blur rounded-full text-sm"
            >
              <Phone className="w-4 h-4 text-orange-400" />
              <span className="hidden xs:inline">Позвонить</span>
            </a>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="p-2 bg-black/40 ring-1 ring-white/20 backdrop-blur rounded-full"
            >
              {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </nav>

        {/* Mobile Menu Dropdown */}
        {menuOpen && (
          <div className="relative z-10 mx-4 mb-2 md:hidden rounded-2xl bg-black/80 ring-1 ring-white/20 backdrop-blur p-4 flex flex-col gap-2">
            {["О пеллетах", "Преимущества", "Как купить", "Вопросы", "Контакты"].map((item) => (
              <a
                key={item}
                href="#"
                onClick={() => setMenuOpen(false)}
                className="px-4 py-3 rounded-xl hover:bg-white/10 transition-colors text-sm font-medium"
              >
                {item}
              </a>
            ))}
            <Button className="mt-2 bg-white text-black hover:bg-white/90 rounded-xl w-full">
              Получить предложение
            </Button>
          </div>
        )}

        {/* Hero Content */}
        <div className="relative z-10 flex flex-col items-center justify-center min-h-[calc(100vh-80px)] px-4 md:px-6 text-center">
          {/* Badge */}
          <div className="mb-4 md:mb-6 px-3 py-1.5 md:px-4 md:py-2 bg-black/40 ring-1 ring-white/20 backdrop-blur rounded-full">
            <span className="text-xs md:text-sm font-medium">Надёжный поставщик биотоплива в России</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-8xl font-light tracking-tight mb-4 md:mb-6 text-balance leading-tight">
            Пеллеты — топливо будущего.
          </h1>

          {/* Subheading */}
          <p className="text-base md:text-2xl text-white/90 max-w-4xl mb-8 md:mb-12 leading-relaxed text-pretty">
            Экологичное, возобновляемое биотопливо с высокой теплоотдачей. Поможем подготовиться к холодам — качественные поставки по всей России.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 mb-10 md:mb-16 w-full max-w-sm sm:max-w-none sm:w-auto">
            <Button size="lg" className="bg-white text-black hover:bg-white/90 rounded-full px-8 py-4 text-base md:text-lg w-full sm:w-auto">
              Получить предложение
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-black/40 ring-1 ring-white/20 backdrop-blur border-0 text-white hover:bg-black/50 rounded-full px-8 py-4 text-base md:text-lg w-full sm:w-auto"
            >
              Узнать о пеллетах
            </Button>
          </div>

          {/* Footer Note */}
          <div className="flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 bg-black/40 ring-1 ring-white/20 backdrop-blur rounded-full">
            <Leaf className="w-3 h-3 md:w-4 md:h-4 text-green-400" />
            <span className="text-xs md:text-sm font-medium">Экологичность — наш приоритет</span>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <section className="relative z-10 py-12 md:py-24 px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-2 xl:grid-cols-4 gap-4 md:gap-8">
            <div className="rounded-2xl bg-black/20 ring-1 ring-white/15 backdrop-blur p-5 md:p-8 text-center">
              <div className="inline-flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-xl bg-black/30 ring-1 ring-white/20 mb-4 md:mb-6">
                <Leaf className="w-5 h-5 md:w-6 md:h-6 text-green-400" />
              </div>
              <h3 className="text-base md:text-xl font-semibold mb-2 md:mb-4">Экологичность</h3>
              <p className="text-white/80 leading-relaxed text-xs md:text-base">Снижение выбросов CO₂. Чистое горение без токсичных отходов.</p>
            </div>

            <div className="rounded-2xl bg-black/20 ring-1 ring-white/15 backdrop-blur p-5 md:p-8 text-center">
              <div className="inline-flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-xl bg-black/30 ring-1 ring-white/20 mb-4 md:mb-6">
                <Wallet className="w-5 h-5 md:w-6 md:h-6 text-yellow-400" />
              </div>
              <h3 className="text-base md:text-xl font-semibold mb-2 md:mb-4">Экономия</h3>
              <p className="text-white/80 leading-relaxed text-xs md:text-base">Снижение затрат на отопление. Выгодные летние закупки.</p>
            </div>

            <div className="rounded-2xl bg-black/20 ring-1 ring-white/15 backdrop-blur p-5 md:p-8 text-center">
              <div className="inline-flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-xl bg-black/30 ring-1 ring-white/20 mb-4 md:mb-6">
                <ShieldCheck className="w-5 h-5 md:w-6 md:h-6 text-blue-400" />
              </div>
              <h3 className="text-base md:text-xl font-semibold mb-2 md:mb-4">Гарантия качества</h3>
              <p className="text-white/80 leading-relaxed text-xs md:text-base">Проверенные поставки. Опт и розница.</p>
            </div>

            <div className="rounded-2xl bg-black/20 ring-1 ring-white/15 backdrop-blur p-5 md:p-8 text-center">
              <div className="inline-flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-xl bg-black/30 ring-1 ring-white/20 mb-4 md:mb-6">
                <Truck className="w-5 h-5 md:w-6 md:h-6 text-orange-400" />
              </div>
              <h3 className="text-base md:text-xl font-semibold mb-2 md:mb-4">Быстрая доставка</h3>
              <p className="text-white/80 leading-relaxed text-xs md:text-base">Постоянные запасы. Доставка по всей России.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="relative z-10 py-12 md:py-24 px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-3 md:mb-4">Наше производство</h2>
            <p className="text-base md:text-xl text-white/80">Собственный завод, современное оборудование, контроль качества на каждом этапе</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4">
            <div className="col-span-2 rounded-2xl overflow-hidden h-48 md:h-80">
              <img
                src="https://cdn.poehali.dev/projects/3813c157-611e-45da-aee0-cf85d544db54/bucket/8e321b95-6014-4256-afbb-dd5577b4e686.jpg"
                alt="Производство пеллет"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="rounded-2xl overflow-hidden h-48 md:h-80">
              <img
                src="https://cdn.poehali.dev/projects/3813c157-611e-45da-aee0-cf85d544db54/bucket/fbd67a00-db39-46db-bce5-a78c82f28389.jpg"
                alt="Склад пеллет"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="rounded-2xl overflow-hidden h-48 md:h-80">
              <img
                src="https://cdn.poehali.dev/projects/3813c157-611e-45da-aee0-cf85d544db54/bucket/986b3b20-3b04-4a73-9afd-e9ea58a8e738.jpg"
                alt="Оборудование"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="rounded-2xl overflow-hidden h-36 md:h-48">
              <img
                src="https://cdn.poehali.dev/projects/3813c157-611e-45da-aee0-cf85d544db54/bucket/a2297ad5-aaf5-433e-a496-7addeb90f6c2.jpg"
                alt="Пеллеты крупным планом"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="rounded-2xl overflow-hidden h-36 md:h-48">
              <img
                src="https://cdn.poehali.dev/projects/3813c157-611e-45da-aee0-cf85d544db54/bucket/b3824584-eef3-42ad-bdd2-b444cd2f310f.jpg"
                alt="Пеллеты с листком"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="col-span-2 rounded-2xl overflow-hidden h-36 md:h-48">
              <img
                src="https://cdn.poehali.dev/projects/3813c157-611e-45da-aee0-cf85d544db54/bucket/8e321b95-6014-4256-afbb-dd5577b4e686.jpg"
                alt="Производство"
                className="w-full h-full object-cover object-bottom hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* How to Buy Section */}
      <section className="relative z-10 py-12 md:py-24 px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="rounded-2xl md:rounded-3xl bg-white/5 ring-1 ring-white/10 backdrop-blur p-6 md:p-12">
            <div className="text-center mb-10 md:mb-16">
              <h2 className="text-3xl md:text-6xl font-bold tracking-tight mb-3 md:mb-6 text-balance">Как купить пеллеты</h2>
              <p className="text-base md:text-xl text-white/80 max-w-3xl mx-auto text-pretty">
                Три простых шага — и топливо уже едет к вам.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 mb-8 md:mb-12">
              <div className="rounded-xl md:rounded-2xl bg-white/5 ring-1 ring-white/10 backdrop-blur p-6 md:p-8">
                <div className="text-2xl md:text-3xl font-bold text-white/60 mb-3 md:mb-4">01.</div>
                <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-4">Связаться с менеджером</h3>
                <p className="text-white/80 leading-relaxed text-sm">
                  Позвоните по номеру 8-902-888-78-91 или напишите на gogivna@mail.ru.
                </p>
              </div>

              <div className="rounded-xl md:rounded-2xl bg-white/5 ring-1 ring-white/10 backdrop-blur p-6 md:p-8">
                <div className="text-2xl md:text-3xl font-bold text-white/60 mb-3 md:mb-4">02.</div>
                <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-4">Обсудить объём и условия</h3>
                <p className="text-white/80 leading-relaxed text-sm">
                  Уточним объём, фракцию, класс пеллет, сроки и условия доставки.
                </p>
              </div>

              <div className="rounded-xl md:rounded-2xl bg-white/5 ring-1 ring-white/10 backdrop-blur p-6 md:p-8">
                <div className="text-2xl md:text-3xl font-bold text-white/60 mb-3 md:mb-4">03.</div>
                <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-4">Получить выгодное предложение</h3>
                <p className="text-white/80 leading-relaxed text-sm">
                  Конкурентная цена, гарантия качества и своевременная доставка.
                </p>
              </div>
            </div>

            <div className="text-center">
              <Button
                size="lg"
                className="bg-white text-black hover:bg-white/90 rounded-full px-8 md:px-12 py-4 text-base md:text-lg font-semibold w-full sm:w-auto"
              >
                Получить предложение
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="relative z-10 py-12 md:py-24 px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="rounded-2xl md:rounded-3xl bg-white/5 ring-1 ring-white/10 backdrop-blur p-6 md:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-start">
              <div>
                <h2 className="text-3xl md:text-6xl font-bold tracking-tight mb-4 md:mb-6 text-balance">
                  Частые вопросы
                </h2>
                <p className="text-base md:text-xl text-white/80 leading-relaxed text-pretty">
                  Всё, что нужно знать о пеллетах, закупках и доставке от ООО ЛАГУНА.
                </p>
              </div>

              <div className="space-y-3 md:space-y-4">
                {faqs.map((faq, index) => (
                  <div
                    key={index}
                    className="rounded-xl md:rounded-2xl bg-white/5 ring-1 ring-white/10 backdrop-blur overflow-hidden"
                  >
                    <button
                      onClick={() => toggleFaq(index)}
                      className="w-full p-4 md:p-6 text-left flex items-center justify-between hover:bg-white/5 transition-colors"
                    >
                      <h3 className="text-sm md:text-lg font-semibold pr-4">{faq.question}</h3>
                      {openFaq === index ? (
                        <Minus className="w-4 h-4 md:w-5 md:h-5 flex-shrink-0" />
                      ) : (
                        <Plus className="w-4 h-4 md:w-5 md:h-5 flex-shrink-0" />
                      )}
                    </button>
                    {openFaq === index && (
                      <div className="px-4 pb-4 md:px-6 md:pb-6">
                        <p className="text-white/80 leading-relaxed text-sm md:text-base">{faq.answer}</p>
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
      <section className="relative z-10 py-12 md:py-24 px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="rounded-2xl md:rounded-3xl bg-black/20 ring-1 ring-white/15 backdrop-blur p-6 md:p-12">
            <div className="text-center mb-8 md:mb-16">
              <h2 className="text-3xl md:text-6xl font-bold tracking-tight mb-4 md:mb-6 text-balance">Свяжитесь с нами</h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-start">
              <div className="rounded-2xl bg-white/95 text-black p-6 md:p-8 shadow-2xl">
                <h3 className="text-xl md:text-2xl font-bold mb-5 md:mb-6">Отправить запрос</h3>
                {formStatus === "success" ? (
                  <div className="text-center py-8 md:py-10">
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
                  <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">Имя</label>
                      <input
                        type="text"
                        id="name"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent text-base"
                        placeholder="Ваше имя"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium mb-2">Телефон</label>
                      <input
                        type="tel"
                        id="phone"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent text-base"
                        placeholder="+7 (___) ___-__-__"
                      />
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium mb-2">Сообщение</label>
                      <textarea
                        id="message"
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent resize-none text-base"
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

              <div className="space-y-6 md:space-y-8">
                <p className="text-base md:text-xl text-white/90 leading-relaxed text-pretty">
                  По вопросам поставок, объёмов и условий сотрудничества — свяжитесь с нашим менеджером. Ответим быстро и подготовим выгодное предложение.
                </p>

                <div className="rounded-2xl bg-white/95 text-black p-5 md:p-6 shadow-2xl space-y-4">
                  <div>
                    <h4 className="text-lg font-semibold mb-1">ООО ЛАГУНА</h4>
                    <p className="text-gray-600 text-sm">Поставщик биотоплива</p>
                  </div>
                  <a href="tel:89028887891" className="flex items-center gap-3 text-black hover:text-orange-600 transition-colors">
                    <Phone className="w-5 h-5" />
                    <span className="font-medium">8-902-888-78-91</span>
                  </a>
                  <a href="mailto:gogivna@mail.ru" className="flex items-center gap-3 text-black hover:text-orange-600 transition-colors">
                    <Mail className="w-5 h-5" />
                    <span className="font-medium">gogivna@mail.ru</span>
                  </a>
                  <a href="tel:89028887891" className="block w-full mt-2">
                    <Button className="w-full bg-black text-white hover:bg-gray-800 rounded-lg flex items-center justify-center gap-2 py-3">
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

      {/* Sticky Mobile CTA */}
      <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden p-3 bg-[#0B0F12]/90 backdrop-blur border-t border-white/10">
        <div className="flex gap-2">
          <a href="tel:89028887891" className="flex-1">
            <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white rounded-xl py-4 text-base font-semibold flex items-center justify-center gap-2">
              <Phone className="w-5 h-5" />
              Позвонить
            </Button>
          </a>
          <a href="https://t.me/hertoletik66" target="_blank" rel="noopener noreferrer" className="flex-1">
            <Button className="w-full bg-[#229ED9] hover:bg-[#1a8bbf] text-white rounded-xl py-4 text-base font-semibold flex items-center justify-center gap-2">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.248-1.97 9.289c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12L8.32 14.617l-2.96-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.537-.194 1.006.131.496.969z"/>
              </svg>
              Telegram
            </Button>
          </a>
        </div>
      </div>

      {/* Footer */}
      <footer className="relative z-10 py-12 md:py-24 px-4 md:px-6 pb-24 md:pb-24">
        <div className="max-w-7xl mx-auto">
          <div className="rounded-2xl md:rounded-3xl bg-white/[0.03] backdrop-blur-2xl ring-1 ring-white/10 p-6 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-8 md:mb-12">
              <div className="lg:col-span-2">
                <div className="flex items-center gap-2 mb-4 md:mb-6">
                  <Flame className="w-5 h-5 md:w-6 md:h-6 text-orange-400" />
                  <span className="text-lg md:text-xl font-semibold">ООО ЛАГУНА</span>
                </div>
                <p className="text-white/80 leading-relaxed text-pretty text-sm md:text-base">
                  Надёжный поставщик высококачественного биотоплива в России. Круглогодичные поставки пеллет для частных и корпоративных клиентов.
                </p>
              </div>

              <div>
                <h3 className="text-xs font-bold uppercase tracking-wider mb-4 md:mb-6">ПРОДУКЦИЯ</h3>
                <ul className="space-y-2 md:space-y-3">
                  {["О пеллетах", "Ассортимент", "Цены", "Доставка"].map((item) => (
                    <li key={item}>
                      <a href="#" className="text-white/70 hover:text-white transition-colors text-sm leading-relaxed">{item}</a>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-xs font-bold uppercase tracking-wider mb-4 md:mb-6">КОМПАНИЯ</h3>
                <ul className="space-y-2 md:space-y-3">
                  {["О компании", "Качество", "Контакты", "Вопросы и ответы"].map((item) => (
                    <li key={item}>
                      <a href="#" className="text-white/70 hover:text-white transition-colors text-sm leading-relaxed">{item}</a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="border-t border-white/10 pt-6 md:pt-12 mb-6 md:mb-12">
              <div className="max-w-md">
                <h3 className="text-base md:text-lg font-semibold mb-3 md:mb-4">Следите за ценами и акциями</h3>
                <div className="flex gap-2 md:gap-3">
                  <input
                    type="email"
                    placeholder="Введите ваш email"
                    className="flex-1 px-3 md:px-4 py-2.5 md:py-3 rounded-lg bg-white/5 ring-1 ring-white/20 backdrop-blur border-0 text-white placeholder:text-white/50 focus:ring-2 focus:ring-white/30 focus:outline-none text-sm"
                  />
                  <Button className="bg-white text-black hover:bg-white/90 rounded-lg px-4 md:px-6 h-[44px] md:h-[50px] text-sm">Подписаться</Button>
                </div>
              </div>
            </div>

            <div className="border-t border-white/10 pt-6 md:pt-8">
              <p className="text-white/60 text-xs md:text-sm text-center">© 2026 ООО ЛАГУНА — Экологичное топливо</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Index