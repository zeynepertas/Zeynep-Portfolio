export interface Project {
  id: string;
  title: string;
  descriptionTr: string;
  descriptionEn: string;
  techStack: string[];
  githubUrl: string;
}

export const projects: Project[] = [
  {
    id: 'music-classification',
    title: 'Music Genre Classification',
    descriptionTr: 'Ses sinyalleri üzerinde Kısa Süreli Fourier Dönüşümü (STFT) tabanlı Log-Spektrogram öznitelik çıkarımı (feature extraction) gerçekleştiren kapsamlı bir Müzik Türü Sınıflandırma (Genre Classification) sistemidir. Akustik veriler; Destek Vektör Makineleri (SVM), K-En Yakın Komşu (KNN), Karar Ağaçları ve Yapay Sinir Ağları (YSA) kullanılarak eğitilmiş ve modellerin metrikleri karşılaştırmalı olarak sunulmuştur.',
    descriptionEn: 'A comprehensive Music Genre Classification system performing Short-Time Fourier Transform (STFT) based Log-Spectrogram feature extraction on audio signals. Acoustic data was used to train models including SVM, KNN, Decision Trees, and Artificial Neural Networks (ANN), providing a robust comparative performance analysis.',
    techStack: ['Python', 'Librosa', 'Scikit-Learn', 'ANN', 'Signal Processing'],
    githubUrl: 'https://github.com/zeynepertas/Music-Classification-App',
  },
  {
    id: 'brain-hemorrhage-yolo',
    title: 'Brain Hemorrhage Detection with YOLOv8',
    descriptionTr: 'YOLOv8 mimarisinden güç alan, bilgisayarlı görü (Computer Vision) tabanlı beyin kanaması teşhis sistemi. Asenkron FastAPI ve ThreadPool entegrasyonuyla yüksek ölçeklenebilirlik sunarken, siber güvenlik protokolleriyle korunan tıbbi standartlarda uçtan uca bir yapay zeka platformu.',
    descriptionEn: 'A Computer Vision diagnostic system powered by the YOLOv8 architecture for detecting brain hemorrhages from CT images. It offers high scalability with asynchronous FastAPI and ThreadPool integration, functioning as an end-to-end medical-grade AI platform protected by advanced cybersecurity protocols.',
    techStack: ['Python', 'YOLOv8', 'FastAPI', 'Computer Vision', 'Cybersecurity'],
    githubUrl: 'https://github.com/zeynepertas/Brain-Hemorrhage-Detection-with-YOLOv8',
  },
  {
    id: 'esen-uav',
    title: 'ESEN UAV Ground Control',
    descriptionTr: 'İnsansız Hava Araçları (İHA) için geliştirilmiş ileri düzey Yer Kontrol İstasyonu (GCS). Arduino donanımı, Python tabanlı RabbitMQ köprüsü ve Angular arayüzünün eşsiz entegrasyonu; 3D Suni Ufuk, RxJS bellek yönetimi ve gerçek zamanlı telemetri işleme yetenekleriyle donatıldı.',
    descriptionEn: 'An advanced Ground Control Station (GCS) engineered for Unmanned Aerial Vehicles (UAVs). Features a seamless integration of Arduino hardware, a Python-based RabbitMQ bridge, and an Angular interface, equipped with a 3D Artificial Horizon, RxJS memory management, and real-time telemetry processing.',
    techStack: ['TypeScript', 'Angular', 'Python', 'RabbitMQ', 'Arduino'],
    githubUrl: 'https://github.com/zeynepertas/ESEN-UAV-Ground-Control-',
  },
  {
    id: 'medai-cardio',
    title: 'MEDAI Cardio Risk Analytics',
    descriptionTr: 'Klinik veri setleri üzerinden kalp hastalığı riskini %90.58 doğrulukla analiz eden sağlık teknolojisi çözümü. HistGradientBoosting algoritması ile inşa edilmiş modelleme, Streamlit üzerinden sunulan zarif "Glassmorphism" arayüzü ile kullanıcı dostu bir karar destek mekanizmasına dönüşüyor.',
    descriptionEn: 'A health-tech solution that analyzes heart disease risks from clinical datasets with 90.58% accuracy. The modeling, built with the HistGradientBoosting algorithm, translates into a user-friendly decision support mechanism delivered through an elegant Glassmorphism interface on Streamlit.',
    techStack: ['Python', 'Scikit-Learn', 'Plotly', 'Streamlit', 'Machine Learning'],
    githubUrl: 'https://github.com/zeynepertas/MEDAI-Cardio-Risk-Analytics',
  },
  {
    id: 'malware-detection',
    title: 'Malware Detection Platform',
    descriptionTr: 'Siber güvenlik alanında PE (Portable Executable) dosyalarındaki zararlı yazılımları otonom olarak tespit eden kurumsal analiz platformu. Doğal Dil İşleme (NLP) yetenekleriyle desteklenen CNN, Random Forest ve XGBoost tabanlı hibrit bir yapay zeka altyapısına sahiptir.',
    descriptionEn: 'An enterprise-grade cybersecurity analysis platform that autonomously detects malware in PE (Portable Executable) files. It leverages a hybrid AI infrastructure based on CNN, Random Forest, and XGBoost, augmented by Natural Language Processing (NLP) capabilities.',
    techStack: ['Python', 'CNN', 'XGBoost', 'Random Forest', 'NLP'],
    githubUrl: 'https://github.com/zeynepertas/Malware-Detection-Project',
  },
  {
    id: 'cinebrain-pro',
    title: 'CineBrain Pro',
    descriptionTr: 'Sinemaseverler için geliştirilmiş, TMDB API ve Kosinüs Benzerliği tabanlı yeni nesil hibrit film önerme motoru. Açıklanabilir Yapay Zeka (XAI) prensipleri kullanılarak, kullanıcılara "neden bu filmi izlemelisin?" sorusunun yanıtını şeffaf bir şekilde sunar.',
    descriptionEn: 'A next-generation hybrid movie recommendation engine based on the TMDB API and Cosine Similarity. Utilizing Explainable AI (XAI) principles, it transparently answers "why should you watch this movie?" to combat decision fatigue.',
    techStack: ['Python', 'Streamlit', 'TMDB API', 'XAI', 'Data Science'],
    githubUrl: 'https://github.com/zeynepertas/CineBrain-Pro',
  },
  {
    id: 'imdb-sentiment',
    title: 'IMDB Sentiment Analyzer',
    descriptionTr: 'İngilizce film incelemelerinin duygu durumunu (pozitif/negatif) gerçek zamanlı analiz eden NLP odaklı metin madenciliği platformu. TF-IDF yaklaşımı ve Lojistik Regresyon, SVM, Naive Bayes algoritmalarını harmanlayan Ensemble model, FastAPI üzerinden yüksek performansla servis edilmektedir.',
    descriptionEn: 'An NLP-focused text mining platform that analyzes the sentiment of English movie reviews in real-time. The Ensemble model, combining TF-IDF with Logistic Regression, SVM, and Naive Bayes, is served with high performance via FastAPI.',
    techStack: ['Python', 'FastAPI', 'Scikit-Learn', 'NLP'],
    githubUrl: 'https://github.com/zeynepertas/IMDB-Sentiment-Analyzer',
  },
  {
    id: 'brain-hemorrhage-dl',
    title: 'Brain Hemorrhage Detection (DL)',
    descriptionTr: 'Beyin kanaması teşhisi için veri sızıntısını sıfıra indiren hasta bazlı GroupShuffleSplit mimarisine sahip Derin Öğrenme projesi. Optuna ile hiperparametre optimizasyonu yapılmış Custom CNN ve ConvNeXt modellerini, CustomTkinter ile tasarlanmış modern bir masaüstü arayüzü ile buluşturur.',
    descriptionEn: 'A Deep Learning project for brain hemorrhage diagnosis featuring a patient-based GroupShuffleSplit architecture that eliminates data leakage. It integrates Optuna-optimized Custom CNN and ConvNeXt models with a modern desktop UI built on CustomTkinter.',
    techStack: ['Python', 'Deep Learning', 'ConvNeXt', 'Optuna', 'GUI'],
    githubUrl: 'https://github.com/zeynepertas/Brain-Hemorrhage-Detection',
  },
  {
    id: 'course-reg',
    title: 'Modern Course Registration',
    descriptionTr: 'Eğitim kurumları için "Glassmorphism" vizyonuyla geliştirilmiş modern ders kayıt ve akademik yönetim platformu. React ve Vite ekosisteminde inşa edilen sistem; dinamik kredi validasyonu, dönemsel kural motorları ve lokal veri kalıcılığı (LocalStorage) gibi kompleks istemci taraflı algoritmalar barındırır.',
    descriptionEn: 'A modern academic course registration and management platform crafted with a "Glassmorphism" vision. Built on React and Vite, it features complex client-side algorithms including dynamic credit validation, semester rule engines, and LocalStorage data persistence.',
    techStack: ['JavaScript', 'React', 'Vite', 'UI/UX'],
    githubUrl: 'https://github.com/zeynepertas/Course-Registration-System',
  },
  {
    id: 'oria-wedding',
    title: 'ORIA Wedding Website',
    descriptionTr: 'Semantic HTML5, Vanilla JavaScript ve CSS3 (Grid/Flexbox) mimarisi ile sıfırdan geliştirilmiş; GPU hızlandırmalı animasyonlara (hardware-accelerated) ve optimize edilmiş medya dosyalarına sahip, yüksek performanslı responsive front-end projesi.',
    descriptionEn: 'A high-performance responsive front-end project developed from scratch using Semantic HTML5, Vanilla JavaScript, and CSS3 (Grid/Flexbox). Features hardware-accelerated GPU animations and optimized media files.',
    techStack: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design'],
    githubUrl: 'https://github.com/zeynepertas/ORIA-WEDDING-WEBSITE',
  },
  {
    id: 'wake-up-system',
    title: 'Wake Up System (STT)',
    descriptionTr: 'Ses sinyallerinden MFCC özellikleri çıkararak komut tespiti yapan makine öğrenimi tabanlı sistem. %89 doğruluk oranına sahip SVM modeliyle güçlendirilmiş; PyAudio, Speech-to-Text (STT) ve Hugging Face entegrasyonu barındıran uçtan uca analiz projesi.',
    descriptionEn: 'A machine learning-based system that detects commands by extracting MFCC features from audio signals. Powered by an SVM model with 89% accuracy, it features an end-to-end analysis pipeline integrating PyAudio, STT, and Hugging Face.',
    techStack: ['Python', 'Machine Learning', 'SVM', 'PyAudio', 'NLP'],
    githubUrl: 'https://github.com/zeynepertas/Wake-Up-System',
  },
  {
    id: 'zem-gym',
    title: 'ZEM GYM Management',
    descriptionTr: 'ASP.NET Core MVC ve Entity Framework (DB First) ile geliştirilmiş, çok katmanlı rol (Admin/Member) mimarisine sahip modern spor salonu yönetim sistemi. SHA-256 şifreleme, Chart.js finansal analizleri ve Bootstrap 5 entegrasyonu barındıran tam donanımlı bir .NET projesi.',
    descriptionEn: 'A modern gym management system with a multi-tier role (Admin/Member) architecture, developed using ASP.NET Core MVC and Entity Framework. A fully equipped .NET project featuring SHA-256 encryption, Chart.js financial analytics, and Bootstrap 5.',
    techStack: ['C#', 'ASP.NET Core', 'Entity Framework', 'Bootstrap'],
    githubUrl: 'https://github.com/zeynepertas/ZEM-GYM',
  },
  {
    id: 'zodiac-sign',
    title: 'Zodiac Analysis Engine',
    descriptionTr: 'Saf PHP ve algoritmik tarih-zaman eşleştirme ile sıfırdan geliştirilmiş dinamik burç analiz motoru. UNIX timestamp tabanlı kronolojik gün hesaplaması ve client-side optimize edilmiş form yönetimi barındıran interaktif web projesi.',
    descriptionEn: 'A dynamic zodiac analysis engine developed from scratch with pure PHP and algorithmic date-time parsing. An interactive web project featuring UNIX timestamp-based chronological calculations and optimized client-side form management.',
    techStack: ['PHP', 'HTML', 'CSS', 'Algorithms'],
    githubUrl: 'https://github.com/zeynepertas/Zodiac-Sign-Project',
  }
];
