import { collection, config, fields, singleton } from '@keystatic/core'

export default config({
  storage: {
    kind: process.env.NODE_ENV === 'production' ? 'github' : 'local',
  },
  github: {
    owner: 'cuneytcz',
    repository: 'your-repo-name',
    branch: 'main',
  },
  ui: {
    brand: {
      name: 'Admin Panel',
    },
  },
  singletons: {
    hero: singleton({
      label: 'Hero',
      path: 'content/hero',
      schema: {
        title: fields.text({
          label: 'Ana Başlık',
          defaultValue: 'Web Tasarım & Yazılım',
        }),
        subtitle: fields.text({
          label: 'Alt Başlık',
          defaultValue: '2025 Özel Fiyatlar',
        }),
        discountPercentage: fields.text({
          label: 'İndirim Yüzdesi',
          defaultValue: '%40',
        }),
        discountText: fields.text({
          label: 'İndirim Metni',
          defaultValue: 'Yeni Yıla Özel İndirim',
        }),
        discountEndDate: fields.text({
          label: 'Bitiş Tarihi',
          defaultValue: '31 Ocak',
        }),
      },
    }),

    solutions: singleton({
      label: 'Solutions',
      path: 'content/solutions',
      schema: {
        title: fields.text({
          label: 'Başlık',
          defaultValue: 'Web Sitesi ve Yazılım Çözümleri',
        }),
        description: fields.text({
          label: 'Açıklama',
          defaultValue:
            'İşletmenizin ihtiyaçlarına özel, profesyonel web çözümleri. Başlangıç fiyatlarımızı inceleyin.',
        }),
        plans: fields.array(
          fields.object({
            name: fields.text({ label: 'Plan Adı' }),
            price: fields.text({ label: 'Fiyat' }),
            slug: fields.text({ label: 'URL Kodu' }),
            description: fields.text({ label: 'Açıklama' }),
            popular: fields.checkbox({
              label: 'Öne Çıkan Plan',
              defaultValue: false,
            }),
            features: fields.array(fields.text({ label: 'Özellik' }), {
              label: 'Özellikler',
            }),
          }),
          { label: 'Planlar' },
        ),
      },
    }),

    contact: singleton({
      label: 'Contact',
      path: 'content/contact',
      schema: {
        title: fields.text({
          label: 'Başlık',
          defaultValue: 'İletişim',
        }),
        description: fields.text({
          label: 'Açıklama',
          defaultValue:
            'Bizimle iletişime geçin, en kısa sürede dönüş yapalım.',
        }),
        contactInfo: fields.array(
          fields.object({
            icon: fields.text({
              label: 'İkon',
              defaultValue: 'Phone',
            }),
            title: fields.text({
              label: 'Başlık',
              defaultValue: 'Telefon',
            }),
            description: fields.text({
              label: 'Açıklama',
              defaultValue: '+90 531 747 65 04',
            }),
            href: fields.text({
              label: 'Link',
              defaultValue: 'tel:+905317476504',
            }),
          }),
          {
            label: 'İletişim Bilgileri',
            itemLabel: (props: { fields: { title: { value: string } } }) =>
              props.fields.title.value,
          },
        ),
        mapUrl: fields.text({
          label: 'Harita URL',
          defaultValue:
            'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d100959.98406789821!2d27.142833399999998!3d38.418677!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14bbd862a762cacd%3A0x628cbba1a59ce8fe!2zxLB6bWly!5e0!3m2!1str!2str!4v1680000000000!5m2!1str!2str',
        }),
      },
    }),

    footer: singleton({
      label: 'Footer',
      path: 'content/footer',
      schema: {
        socialLinks: fields.array(
          fields.object({
            platform: fields.select({
              label: 'Platform',
              options: [
                { label: 'Twitter', value: 'twitter' },
                { label: 'LinkedIn', value: 'linkedin' },
                { label: 'Instagram', value: 'instagram' },
                { label: 'Facebook', value: 'facebook' },
                { label: 'GitHub', value: 'github' },
              ],
              defaultValue: 'twitter',
            }),
            url: fields.text({
              label: 'URL',
              validation: { length: { min: 1 } },
            }),
          }),
          {
            label: 'Sosyal Medya Linkleri',
            itemLabel: (props: { fields: { platform: { value: string } } }) =>
              props.fields.platform.value,
          },
        ),
      },
    }),
  },

  collections: {
    pages: collection({
      label: 'Pages',
      path: 'content/pages/*',
      format: { contentField: 'content' },
      slugField: 'slug',
      schema: {
        title: fields.text({ label: 'Başlık' }),
        description: fields.text({
          label: 'Açıklama',
          multiline: true,
        }),
        slug: fields.text({
          label: 'URL',
          validation: { length: { min: 1 } },
        }),
        content: fields.document({
          label: 'İçerik',
          formatting: true,
          dividers: true,
          links: true,
          images: {
            directory: 'public/images/pages',
            publicPath: '/images/pages/',
          },
        }),
      },
    }),

    services: collection({
      label: 'Services',
      path: 'content/services/*',
      slugField: 'slug',
      schema: {
        title: fields.text({ label: 'Başlık' }),
        description: fields.text({
          label: 'Açıklama',
          multiline: true,
        }),
        icon: fields.text({ label: 'İkon' }),
        image: fields.image({
          label: 'Görsel',
          directory: 'public/images/services',
          publicPath: '/images/services/',
        }),
        features: fields.array(fields.text({ label: 'Özellik' }), {
          label: 'Özellikler',
          itemLabel: (props) => props.value,
        }),
        slug: fields.text({ label: 'URL' }),
      },
    }),

    plans: collection({
      label: 'Plans',
      path: 'content/plans/*',
      slugField: 'slug',
      schema: {
        name: fields.text({ label: 'Plan Adı' }),
        price: fields.text({ label: 'Fiyat' }),
        description: fields.text({ label: 'Açıklama' }),
        features: fields.array(fields.text({ label: 'Özellik' }), {
          label: 'Özellikler',
          itemLabel: (props) => props.value,
        }),
        popular: fields.checkbox({ label: 'Popüler Plan' }),
        slug: fields.text({ label: 'URL' }),
      },
    }),

    careers: collection({
      label: 'Careers',
      path: 'content/careers/*',
      slugField: 'slug',
      schema: {
        title: fields.text({ label: 'Pozisyon' }),
        type: fields.select({
          label: 'Çalışma Şekli',
          options: [
            { label: 'Tam Zamanlı', value: 'full-time' },
            { label: 'Yarı Zamanlı', value: 'part-time' },
            { label: 'Uzaktan', value: 'remote' },
          ],
          defaultValue: 'full-time',
        }),
        location: fields.text({ label: 'Lokasyon' }),
        department: fields.text({ label: 'Departman' }),
        description: fields.text({
          label: 'Açıklama',
          multiline: true,
        }),
        requirements: fields.array(fields.text({ label: 'Gereksinim' }), {
          label: 'Gereksinimler',
          itemLabel: (props: { value: string }) => props.value,
        }),
        slug: fields.text({ label: 'URL' }),
      },
    }),

    blog: collection({
      label: 'Blog',
      path: 'content/blog/*',
      slugField: 'slug',
      schema: {
        title: fields.text({
          label: 'Başlık',
          validation: { length: { min: 1 } },
        }),
        slug: fields.text({
          label: 'URL',
          validation: { length: { min: 1 } },
        }),
        publishedAt: fields.date({
          label: 'Yayın Tarihi',
          defaultValue: new Date().toISOString(),
        }),
        excerpt: fields.text({
          label: 'Özet',
          multiline: true,
        }),
        coverImage: fields.image({
          label: 'Kapak Görseli',
          directory: 'public/images/blog',
          publicPath: '/images/blog/',
        }),
        author: fields.object({
          name: fields.text({ label: 'Yazar Adı' }),
          avatar: fields.image({
            label: 'Profil Fotoğrafı',
            directory: 'public/images/authors',
            publicPath: '/images/authors/',
          }),
          role: fields.text({ label: 'Ünvan' }),
        }),
        category: fields.select({
          label: 'Kategori',
          options: [
            { label: 'Web Tasarım', value: 'web-design' },
            { label: 'Yazılım Geliştirme', value: 'development' },
            { label: 'UI/UX Tasarım', value: 'ui-ux' },
            {
              label: 'Dijital Pazarlama',
              value: 'digital-marketing',
            },
            { label: 'SEO', value: 'seo' },
          ],
          defaultValue: 'web-design',
        }),
        tags: fields.array(fields.text({ label: 'Etiket' }), {
          label: 'Etiketler',
          itemLabel: (props: { value: string }) => props.value,
        }),
        content: fields.document({
          label: 'İçerik',
          formatting: true,
          dividers: true,
          links: true,
          images: {
            directory: 'public/images/blog',
            publicPath: '/images/blog/',
          },
        }),
        seo: fields.object({
          metaTitle: fields.text({ label: 'SEO Başlık' }),
          metaDescription: fields.text({
            label: 'SEO Açıklama',
            multiline: true,
          }),
          keywords: fields.array(fields.text({ label: 'Anahtar Kelime' }), {
            label: 'Anahtar Kelimeler',
            itemLabel: (props: { value: string }) => props.value,
          }),
        }),
      },
    }),

    submissions: collection({
      label: 'Form Başvuruları',
      path: 'content/submissions/*',
      slugField: 'id',
      schema: {
        id: fields.text({
          label: 'ID',
          validation: { length: { min: 1 } },
        }),
        type: fields.select({
          label: 'Form Tipi',
          options: [
            { label: 'İletişim Formu', value: 'contact' },
            { label: 'Kariyer Başvurusu', value: 'career' },
            { label: 'Bülten Aboneliği', value: 'newsletter' },
          ],
          defaultValue: 'contact',
        }),
        status: fields.select({
          label: 'Durum',
          options: [
            { label: 'Yeni', value: 'new' },
            { label: 'İnceleniyor', value: 'in-progress' },
            { label: 'Tamamlandı', value: 'completed' },
            { label: 'İptal', value: 'cancelled' },
          ],
          defaultValue: 'new',
        }),
        createdAt: fields.date({
          label: 'Gönderim Tarihi',
          defaultValue: new Date().toISOString(),
        }),
        formData: fields.object({
          firstName: fields.text({ label: 'Ad' }),
          lastName: fields.text({ label: 'Soyad' }),
          email: fields.text({ label: 'E-posta' }),
          phone: fields.text({ label: 'Telefon' }),
          message: fields.text({
            label: 'Mesaj',
            multiline: true,
          }),
          plan: fields.text({
            label: 'Seçilen Plan',
            validation: { isRequired: false },
          }),
          resume: fields.file({
            label: 'Özgeçmiş',
            directory: 'public/files/resumes',
            publicPath: '/files/resumes/',
          }),
        }),
        notes: fields.text({
          label: 'Notlar',
          multiline: true,
          validation: { isRequired: false },
        }),
      },
    }),
  },
})
