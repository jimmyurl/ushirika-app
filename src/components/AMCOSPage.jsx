import { useState, useRef } from 'react'; // Import useRef
import { Coffee, Users, MapPin, Award, TrendingUp, Eye, Search, Filter } from 'lucide-react';

const AMCOSPage = () => {
  const [showAllAMCOS, setShowAllAMCOS] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDistrict, setSelectedDistrict] = useState('all');

  const inputRef = useRef(null); // Create a ref for the search input

  const amcosList = [
    { name: "Ahamurama", district: "Karagwe", ward: "Kiruruma", registrationNo: "PRI-KR-KAR-DC-2023-5565", members: null, established: null },
    { name: "Bisheshe", district: "Karagwe", ward: "Bugene", registrationNo: "PRI-KR-KAR-DC-2023-3687", members: null, established: null },
    { name: "Biyungu", district: "Karagwe", ward: "Kiruruma", registrationNo: "PRI-KR-KAR-DC-2022-764", members: null, established: null },
    { name: "Boresha", district: "Kyerwa", ward: "Masheshe", registrationNo: null, members: null, established: null },
    { name: "Bugara", district: "Kyerwa", ward: "Bugara", registrationNo: "PRI-KR-KYE-DC-2023-4128", members: null, established: null },
    { name: "Bugene", district: "Karagwe", ward: "Bugene", registrationNo: "PRI-KR-KAR-DC-2023-3207", members: null, established: null },
    { name: "Bugomora", district: "Kyerwa", ward: "Bugomora", registrationNo: "PRI-KR-KYE-DC-2023-6083", members: null, established: null },
    { name: "Bukanya", district: "Karagwe", ward: "Nyakasimbi", registrationNo: "PRI-KR-KAR-DC-2023-3190", members: null, established: null },
    { name: "Businde", district: "Kyerwa", ward: "Businde", registrationNo: "PRI-KR-KYE-DC-2023-4131", members: null, established: null },
    { name: "Bweranyange", district: "Karagwe", ward: "Bweranyange", registrationNo: "PRI-KR-KAR-DC-2023-3283", members: null, established: null },
    { name: "Bwikizo", district: "Karagwe", ward: "Ihembe", registrationNo: "PRI-KR-KAR-DC-2023-3690", members: null, established: null },
    { name: "Chababara", district: "Kyerwa", ward: "Kaisho", registrationNo: "PRI-KR-KYE-DC-2023-4190", members: null, established: null },
    { name: "Chakalisa", district: "Kyerwa", ward: "Kimuli", registrationNo: "PRI-KR-KYE-DC-2024-6474", members: null, established: null },
    { name: "Chamchuzi", district: "Karagwe", ward: "Chamchuzi", registrationNo: "PRI-KR-KAR-DC-2023-3771", members: null, established: null },
    { name: "Chanya", district: "Kyerwa", ward: "Iteera", registrationNo: "PRI-KR-KYE-DC-2023-5348", members: null, established: null },
    { name: "Chanyangabwa", district: "Kyerwa", ward: "Songambele", registrationNo: "PRI-KR-KYE-DC-2022-2112", members: null, established: null },
    { name: "Faraja", district: "Kyerwa", ward: "Rwabwere", registrationNo: "PRI-KR-KYE-DC-2023-5626", members: null, established: null },
    { name: "Igurwa/Rwambaizi", district: "Karagwe", ward: "Kanoni", registrationNo: "PRI-KR-KAR-DC-2022-1098", members: null, established: null },
    { name: "Ihembe", district: "Karagwe", ward: "Ihembe", registrationNo: "PRI-KR-KAR-DC-2023-3281", members: null, established: null },
    { name: "Iremela", district: "Kyerwa", ward: "Nyakatuntu", registrationNo: "PRI-KR-KYE-DC-2022-748", members: null, established: null },
    { name: "Iteera", district: "Kyerwa", ward: "Iteera", registrationNo: "PRI-KR-KYE-DC-2022-1096", members: null, established: null },
    { name: "Kabezi", district: "Karagwe", ward: "Chamchuzi", registrationNo: "PRI-KR-KAR-DC-2023-3416", members: null, established: null },
    { name: "Kabujuma", district: "Karagwe", ward: "Nyakasimbi", registrationNo: "PRI-KR-KAR-DC-2023-3688", members: null, established: null },
    { name: "Kafunjo", district: "Karagwe", ward: "Songambele", registrationNo: "PRI-KR-KAR-DC-2022-1101", members: null, established: null },
    { name: "Kafuro", district: "Karagwe", ward: "Nyabiyonza", registrationNo: "PRI-KR-KAR-DC-2022-1344", members: null, established: null },
    { name: "Kagaaga", district: "Kyerwa", ward: "Rutunguru", registrationNo: "PRI-KR-KYE-DC-2023-4186", members: null, established: null },
    { name: "Kagenyi", district: "Kyerwa", ward: "Kagenyi", registrationNo: "PRI-KR-KYE-DC-2023-4184", members: null, established: null },
    { name: "Kagu", district: "Kyerwa", ward: "Bugomora", registrationNo: "PRI-KR-KYE-DC-2024-6427", members: null, established: null },
    { name: "Kaikoti", district: "Kyerwa", ward: "Nkwenda", registrationNo: "PRI-KR-KYE-DC-2023-5100", members: null, established: null },
    { name: "Kaisho", district: "Kyerwa", ward: "Kaisho", registrationNo: "PRI-KR-KYE-DC-2023-4126", members: null, established: null },
    { name: "Kaitambuzi", district: "Kyerwa", ward: "Isingiro", registrationNo: "PRI-KR-KYE-DC-2023-4972", members: null, established: null },
    { name: "Kakanja", district: "Kyerwa", ward: "Kakanja", registrationNo: "PRI-KR-KYE-DC-2023-4587", members: null, established: null },
    { name: "Kakanya", district: "Karagwe", ward: "Nyakakika", registrationNo: "PRI-KR-KAR-DC-2022-929", members: null, established: null },
    { name: "Kakerere", district: "Kyerwa", ward: "Nkwenda", registrationNo: "PRI-KR-KYE-DC-2023-3947", members: null, established: null },
    { name: "Kakuraijo", district: "Karagwe", ward: "Nyabiyonza", registrationNo: "PRI-KR-KAR-DC-2022-1346", members: null, established: null },
    { name: "Kamagambo", district: "Karagwe", ward: "Kiruruma", registrationNo: "PRI-KR-KAR-DC-2022-1100", members: null, established: null },
    { name: "Kamahungu", district: "Karagwe", ward: "Kayanga", registrationNo: "PRI-KR-KAR-DC-2022-1733", members: null, established: null },
    { name: "Kamuli", district: "Kyerwa", ward: "Kamuli", registrationNo: "PRI-KR-KYE-DC-2023-3948", members: null, established: null },
    { name: "Kandegesho Kaiho", district: "Karagwe", ward: "Nyakakika", registrationNo: "PRI-KR-KAR-DC-2022-927", members: null, established: null },
    { name: "Kanoni", district: "Karagwe", ward: "Kanoni", registrationNo: "PRI-KR-KAR-DC-2023-3141", members: null, established: null },
    { name: "Kanya", district: "Karagwe", ward: "Nyakakika", registrationNo: "PRI-KR-KAR-DC-2022-1099", members: null, established: null },
    { name: "Karambi", district: "Kyerwa", ward: "Kikukuru", registrationNo: "PRI-KR-KYE-DC-2023-4191", members: null, established: null },
    { name: "Karongo", district: "Kyerwa", ward: "Rwabwere", registrationNo: "PRI-KR-KYE-DC-2023-4134", members: null, established: null },
    { name: "Karukwanzi", district: "Kyerwa", ward: "Isingiro", registrationNo: "PRI-KR-KYE-DC-2023-4135", members: null, established: null },
    { name: "Kasheshe", district: "Karagwe", ward: "Rugu", registrationNo: "PRI-KR-KAR-DC-2023-3282", members: null, established: null },
    { name: "Kasoni", district: "Kyerwa", ward: "Nyakatuntu", registrationNo: "PRI-KR-KYE-DC-2023-4423", members: null, established: null },
    { name: "Katera", district: "Kyerwa", ward: "Isingiro", registrationNo: "PRI-KR-KYE-DC-2022-1917", members: null, established: null },
    { name: "Katwe", district: "Karagwe", ward: "Kituntu", registrationNo: "PRI-KR-KAR-DC-2023-3216", members: null, established: null },
    { name: "Kayanga", district: "Karagwe", ward: "Kayanga", registrationNo: "PRI-KR-KAR-DC-2023-3145", members: null, established: null },
    { name: "Kibimba", district: "Kyerwa", ward: "Mabira", registrationNo: "PRI-KR-KYE-DC-2022-1094", members: null, established: null },
    { name: "Kibingo", district: "Kyerwa", ward: "Kibingo", registrationNo: "PRI-KR-KYE-DC-2024-6424", members: null, established: null },
    { name: "Kibona", district: "Karagwe", ward: "Kanoni", registrationNo: "PRI-KR-KAR-DC-2022-1863", members: null, established: null },
    { name: "Kibondo", district: "Karagwe", ward: "Nyakaiga", registrationNo: "PRI-KR-KAR-DC-2022-1729", members: null, established: null },
    { name: "Kigarama", district: "Karagwe", ward: "Kanoni", registrationNo: "PRI-KR-KAR-DC-2022-1345", members: null, established: null },
    { name: "Kigemu", district: "Karagwe", ward: "Ihembe", registrationNo: "PRI-KR-KAR-DC-2022-689", members: null, established: null },
    { name: "Kihanga", district: "Kyerwa", ward: "Isingiro", registrationNo: "PRI-KR-KYE-DC-2023-4730", members: null, established: null },
    { name: "Kihinda", district: "Kyerwa", ward: "Kibingo", registrationNo: null, members: null, established: null },
    { name: "Kijumbula", district: "Karagwe", ward: "Chamchuzi", registrationNo: "PRI-KR-KAR-DC-2022-1725", members: null, established: null },
    { name: "Kikukuru", district: "Kyerwa", ward: "Kikukuru", registrationNo: "PRI-KR-KYE-DC-2023-4183", members: null, established: null },
    { name: "Kilela", district: "Kyerwa", ward: "Rutunguru", registrationNo: "PRI-KR-KYE-DC-2023-4733", members: null, established: null },
    { name: "Kimuli", district: "Kyerwa", ward: "Kimuli", registrationNo: null, members: null, established: null },
    { name: "Kiruruma", district: "Karagwe", ward: "Kiruruma", registrationNo: "PRI-KR-KAR-DC-2022-1102", members: null, established: null },
    { name: "Kishanda B", district: "Kyerwa", ward: "Nyakatuntu", registrationNo: "PRI-KR-KYE-DC-2023-4377", members: null, established: null },
    { name: "Kituntu", district: "Karagwe", ward: "Kituntu", registrationNo: "PRI-KR-KAR-DC-2023-3365", members: null, established: null },
    { name: "Kitwe", district: "Kyerwa", ward: "Kitwe", registrationNo: "PRI-KR-KYE-DC-2023-4133", members: null, established: null },
    { name: "Kitwechenkula", district: "Kyerwa", ward: "Kitwechenkura", registrationNo: "PRI-KR-KYE-DC-2023-4424", members: null, established: null },
    { name: "Kyerere", district: "Kyerwa", ward: "Nyakatuntu", registrationNo: "PRI-KR-KYE-DC-2024-6497", members: null, established: null },
    { name: "Kyerwa", district: "Kyerwa", ward: "Kyerwa", registrationNo: "PRI-KR-KYE-DC-2023-4130", members: null, established: null },
    { name: "Mabira", district: "Kyerwa", ward: "Mabira", registrationNo: "PRI-KR-KYE-DC-2022-635", members: null, established: null },
    { name: "Maendeleo", district: "Kyerwa", ward: "Rutunguru", registrationNo: "PRI-KR-KYE-DC-2023-6218", members: null, established: null },
    { name: "Masheshe", district: "Kyerwa", ward: "Murongo", registrationNo: "PRI-KR-KYE-DC-2024-6451", members: null, established: null },
    { name: "Migina", district: "Kyerwa", ward: "Songambele", registrationNo: "PRI-KR-KYE-DC-2022-649", members: null, established: null },
    { name: "Milambi", district: "Kyerwa", ward: "Kyerwa", registrationNo: "PRI-KR-KYE-DC-2023-4984", members: null, established: null },
    { name: "Mshikamano", district: "Kyerwa", ward: "Nyakatuntu", registrationNo: "PRI-KR-KYE-DC-2022-1864", members: null, established: null },
    { name: "Mugorogoro", district: "Kyerwa", ward: "Kitwechenkura", registrationNo: "PRI-KR-KYE-DC-2023-4224", members: null, established: null },
    { name: "Mukunyu", district: "Kyerwa", ward: "Kikukuru", registrationNo: "PRI-KR-KYE-DC-2023-4971", members: null, established: null },
    { name: "Muleba", district: "Kyerwa", ward: "Iteera", registrationNo: "PRI-KR-KYE-DC-2023-4982", members: null, established: null },
    { name: "Murundana", district: "Kyerwa", ward: "Nyakatuntu", registrationNo: "PRI-KR-KYE-DC-2023-4132", members: null, established: null },
    { name: "Muungano", district: "Kyerwa", ward: "Nkwenda", registrationNo: "PRI-KR-KYE-DC-2023-4964", members: null, established: null },
    { name: "Ndama", district: "Karagwe", ward: "Ndama", registrationNo: "PRI-KR-KAR-DC-2023-3691", members: null, established: null },
    { name: "Nguvukazi", district: "Kyerwa", ward: "Rwabwere", registrationNo: "PRI-KR-KYE-DC-2022-1347", members: null, established: null },
    { name: "Nyabihara", district: "Kyerwa", ward: "Mabira", registrationNo: "PRI-KR-KYE-DC-2023-4965", members: null, established: null },
    { name: "Nyabikurungo", district: "Kyerwa", ward: "Rukuraijo", registrationNo: "PRI-KR-KYE-DC-2023-5078", members: null, established: null },
    { name: "Nyabishenge", district: "Kyerwa", ward: "Kaisho", registrationNo: "PRI-KR-KYE-DC-2024-6500", members: null, established: null },
    { name: "Nyabwegira", district: "Karagwe", ward: "Ndama", registrationNo: "PRI-KR-KAR-DC-2023-3364", members: null, established: null },
    { name: "Nyaishozi", district: "Karagwe", ward: "Nyaishozi", registrationNo: null, members: null, established: null },
    { name: "Nyaka", district: "Karagwe", ward: "Bweranyange", registrationNo: null, members: null, established: null },
    { name: "Nyakabwela", district: "Kyerwa", ward: "Kitwechenkura", registrationNo: "PRI-KR-KYE-DC-2024-6498", members: null, established: null },
    { name: "Nyakagera", district: "Kyerwa", ward: "Kakanja", registrationNo: "PRI-KR-KYE-DC-2022-1885", members: null, established: null },
    { name: "Nyakagoyagoye", district: "Karagwe", ward: "Nyabiyonza", registrationNo: "PRI-KR-KAR-DC-2023-3213", members: null, established: null },
    { name: "Nyakahanga", district: "Karagwe", ward: "Bugene", registrationNo: "PRI-KR-KAR-DC-2023-3214", members: null, established: null },
    { name: "Nyakahita", district: "Karagwe", ward: "Kanoni", registrationNo: "PRI-KR-KAR-DC-2022-1728", members: null, established: null },
    { name: "Nyakaiga", district: "Karagwe", ward: "Nyakaiga", registrationNo: "PRI-KR-KAR-DC-2022-1958", members: null, established: null },
    { name: "Nyakakika", district: "Karagwe", ward: "Nyakakika", registrationNo: "PRI-KR-KAR-DC-2022-617", members: null, established: null },
    { name: "Nyakashenyi", district: "Kyerwa", ward: "Businde", registrationNo: "PRI-KR-KYE-DC-2023-4966", members: null, established: null },
    { name: "Nyakasimbi Muungano", district: "Karagwe", ward: "Nyakasimbi", registrationNo: "PRI-KR-KAR-DC-2022-1957", members: null, established: null },
    { name: "Nyakatuntu", district: "Kyerwa", ward: "Nyakatuntu", registrationNo: "PRI-KR-KYE-DC-2023-4968", members: null, established: null },
    { name: "Nyakayanja", district: "Karagwe", ward: "Nyaishozi", registrationNo: "PRI-KR-KAR-DC-2022-928", members: null, established: null },
    { name: "Nyakemi", district: "Kyerwa", ward: "Kakanja", registrationNo: "PRI-KR-KYE-DC-2023-3950", members: null, established: null },
    { name: "Nyamieli", district: "Karagwe", ward: "Nyabiyonza", registrationNo: "PRI-KR-KAR-DC-2023-5566", members: null, established: null },
    { name: "Nyamweza", district: "Kyerwa", ward: "Rwabwere", registrationNo: "PRI-KR-KYE-DC-2024-6493", members: null, established: null },
    { name: "Nyarutuntu", district: "Kyerwa", ward: "Nkwenda", registrationNo: "PRI-KR-KYE-DC-2022-662", members: null, established: null },
    { name: "Nyaruzumbula", district: "Kyerwa", ward: "Kyerwa", registrationNo: "PRI-KR-KYE-DC-2023-6293", members: null, established: null },
    { name: "Omukagando", district: "Kyerwa", ward: "Mabira", registrationNo: "PRI-KR-KYE-DC-2022-765", members: null, established: null },
    { name: "Omukashanje", district: "Kyerwa", ward: "Rukuraijo", registrationNo: "PRI-KR-KYE-DC-2023-5562", members: null, established: null },
    { name: "Omukishanda", district: "Kyerwa", ward: "Kyerwa", registrationNo: "PRI-KR-KYE-DC-2023-4976", members: null, established: null },
    { name: "Omukitembe", district: "Kyerwa", ward: "Kikukuru", registrationNo: "PRI-KR-KYE-DC-2023-6119", members: null, established: null },
    { name: "Omukiyonza", district: "Kyerwa", ward: "Nyaruzumbura", registrationNo: "PRI-KR-KYE-DC-2023-6082", members: null, established: null },
    { name: "Pamoja", district: "Kyerwa", ward: "Nyaruzumbura", registrationNo: null, members: null, established: null },
    { name: "Rubilizi", district: "Kyerwa", ward: "Kikukuru", registrationNo: "PRI-KR-KYE-DC-2023-6081", members: null, established: null },
    { name: "Rubuga", district: "Kyerwa", ward: "Kitwechenkura", registrationNo: "PRI-KR-KYE-DC-2024-6496", members: null, established: null },
    { name: "Ruchili", district: "Kyerwa", ward: "Nyamiyaga", registrationNo: "PRI-KR-KYE-DC-2023-4378", members: null, established: null },
    { name: "Rugarama", district: "Kyerwa", ward: "Kibare", registrationNo: "PRI-KR-KYE-DC-2023-4379", members: null, established: null },
    { name: "Rugera", district: "Karagwe", ward: "Rugera", registrationNo: "PRI-KR-KAR-DC-2023-5946", members: null, established: null },
    { name: "Rugu", district: "Karagwe", ward: "Rugu", registrationNo: "PRI-KR-KAR-DC-2023-3212", members: null, established: null },
    { name: "Ruhita/Kamuli", district: "Kyerwa", ward: "Mabira", registrationNo: "PRI-KR-KYE-DC-2023-4975", members: null, established: null },
    { name: "Ruhita/Maguge", district: "Karagwe", ward: "Kihanga", registrationNo: "PRI-KR-KAR-DC-2022-1735", members: null, established: null },
    { name: "Ruicho", district: "Karagwe", ward: "Ihanda", registrationNo: "PRI-KR-KAR-DC-2022-1724", members: null, established: null },
    { name: "Rukale", district: "Karagwe", ward: "Nyaishozi", registrationNo: "PRI-KR-KAR-DC-2022-804", members: null, established: null },
    { name: "Rukuraijo", district: "Kyerwa", ward: "Rukuraijo", registrationNo: "PRI-KR-KYE-DC-2023-4728", members: null, established: null },
    { name: "Rumanyika", district: "Kyerwa", ward: "Nyakatuntu", registrationNo: "PRI-KR-KYE-DC-2024-6452", members: null, established: null },
    { name: "Rumuro/Muro", district: "Kyerwa", ward: "Murongo", registrationNo: null, members: null, established: null },
    { name: "Runyaga", district: "Karagwe", ward: "Kituntu", registrationNo: "PRI-KR-KAR-DC-2022-1730", members: null, established: null },
    { name: "Rutunguru", district: "Kyerwa", ward: "Rutunguru", registrationNo: "PRI-KR-KYE-DC-2022-644", members: null, established: null },
    { name: "Rwabigaga", district: "Kyerwa", ward: "Kamuli", registrationNo: "PRI-KR-KYE-DC-2023-4461", members: null, established: null },
    { name: "Rwabwere", district: "Kyerwa", ward: "Rwabwere", registrationNo: "PRI-KR-KYE-DC-2023-3949", members: null, established: null },
    { name: "Rwanyango", district: "Kyerwa", ward: "Kimuli", registrationNo: "PRI-KR-KYE-DC-2023-4973", members: null, established: null },
    { name: "Rwele", district: "Kyerwa", ward: "Kikukuru", registrationNo: "PRI-KR-KYE-DC-2023-4185", members: null, established: null },
    { name: "Rwenkende", district: "Kyerwa", ward: "Kibingo", registrationNo: "PRI-KR-KYE-DC-2023-6263", members: null, established: null },
    { name: "Rwenkorongo", district: "Karagwe", ward: "Kiruruma", registrationNo: "PRI-KR-KAR-DC-2023-5564", members: null, established: null },
    { name: "Rwensheshe", district: "Kyerwa", ward: "Rutunguru", registrationNo: null, members: null, established: null },
    { name: "Sogea", district: "Kyerwa", ward: "Kibimba", registrationNo: null, members: null, established: null },
    { name: "Songambele", district: "Kyerwa", ward: "Songambele", registrationNo: "PRI-KR-KYE-DC-2023-4422", members: null, established: null },
    { name: "Umoja", district: "Kyerwa", ward: "Rwabwere", registrationNo: "PRI-KR-KYE-DC-2023-5349", members: null, established: null }
  ];

  const featuredAMCOS = amcosList.slice(0, 8); // Show first 8 as featured

  // Filter AMCOS based on search and district
  const filteredAMCOS = amcosList.filter(amcos => {
    const matchesSearch = amcos.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDistrict = selectedDistrict === 'all' || amcos.district === selectedDistrict;
    return matchesSearch && matchesDistrict;
  });

  const displayedAMCOS = showAllAMCOS ? filteredAMCOS : featuredAMCOS;

  const AMCOSHeroSection = () => (
    <section style={{ background: 'linear-gradient(135deg, #FEA116 0%, #e4950f 100%)', color: 'white', padding: '5rem 0', textAlign: 'center' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
        <h1 style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '1rem', lineHeight: '1.2' }}>
          Our Member AMCOS <span style={{ display: 'block', fontSize: '1.5rem', fontWeight: '400', marginTop: '0.5rem', color: 'rgba(255,255,255,0.9)' }}> "Strengthening Communities Through Cooperation" </span>
        </h1>
        <p style={{ fontSize: '1.1rem', maxWidth: '800px', margin: '0 auto 2rem', color: 'rgba(255,255,255,0.9)' }}>
          Discover the Agricultural Marketing Cooperative Societies (AMCOS) that form the backbone of our thriving agricultural community. Learn about their impact, locations, and how they contribute to sustainable development.
        </p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}>
          <button style={{
            backgroundColor: 'white',
            color: '#FEA116',
            border: 'none',
            padding: '0.75rem 1.5rem',
            borderRadius: '8px',
            cursor: 'pointer',
            fontSize: '1rem',
            fontWeight: '600',
            transition: 'all 0.3s'
          }}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = '#f0f0f0';
            e.target.style.transform = 'translateY(-2px)';
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = 'white';
            e.target.style.transform = 'translateY(0)';
          }}
          >
            View All AMCOS
          </button>
          <button style={{
            backgroundColor: 'transparent',
            color: 'white',
            border: '2px solid white',
            padding: '0.75rem 1.5rem',
            borderRadius: '8px',
            cursor: 'pointer',
            fontSize: '1rem',
            fontWeight: '600',
            transition: 'all 0.3s'
          }}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = 'rgba(255,255,255,0.1)';
            e.target.style.transform = 'translateY(-2px)';
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = 'transparent';
            e.target.style.transform = 'translateY(0)';
          }}
          >
            Learn More
          </button>
        </div>
      </div>
    </section>
  );

  const AMCOSStatsSection = () => (
    <section style={{ padding: '4rem 0', backgroundColor: '#f8f9fa', textAlign: 'center' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
        <h2 style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#1f2937', marginBottom: '3rem' }}>
          Our Impact in Numbers
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
          <div style={{
            backgroundColor: 'white',
            padding: '2rem',
            borderRadius: '12px',
            boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
            transition: 'transform 0.3s',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}
          onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
          onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
          >
            <Coffee size={48} color="#FEA116" style={{ marginBottom: '1rem' }} />
            <h3 style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#1f2937' }}>{amcosList.length}+</h3>
            <p style={{ fontSize: '1.1rem', color: '#6b7280' }}>Total AMCOS</p>
          </div>
          <div style={{
            backgroundColor: 'white',
            padding: '2rem',
            borderRadius: '12px',
            boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
            transition: 'transform 0.3s',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}
          onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
          onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
          >
            <Users size={48} color="#FEA116" style={{ marginBottom: '1rem' }} />
            <h3 style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#1f2937' }}>{(amcosList.reduce((sum, amcos) => sum + (amcos.members || 0), 0) > 0) ? amcosList.reduce((sum, amcos) => sum + amcos.members, 0) : '20,000+' }</h3>
            <p style={{ fontSize: '1.1rem', color: '#6b7280' }}>Farmer Members</p>
          </div>
          <div style={{
            backgroundColor: 'white',
            padding: '2rem',
            borderRadius: '12px',
            boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
            transition: 'transform 0.3s',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}
          onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
          onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
          >
            <MapPin size={48} color="#FEA116" style={{ marginBottom: '1rem' }} />
            <h3 style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#1f2937' }}>{new Set(amcosList.map(amcos => amcos.district)).size}</h3>
            <p style={{ fontSize: '1.1rem', color: '#6b7280' }}>Districts Covered</p>
          </div>
          <div style={{
            backgroundColor: 'white',
            padding: '2rem',
            borderRadius: '12px',
            boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
            transition: 'transform 0.3s',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}
          onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
          onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
          >
            <Award size={48} color="#FEA116" style={{ marginBottom: '1rem' }} />
            <h3 style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#1f2937' }}>10+</h3>
            <p style={{ fontSize: '1.1rem', color: '#6b7280' }}>Years of Excellence</p>
          </div>
        </div>
      </div>
    </section>
  );

  const AMCOSSection = () => (
    <section style={{ padding: '4rem 0', backgroundColor: '#ffffff' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
        <h2 style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#1f2937', textAlign: 'center', marginBottom: '3rem' }}>
          {showAllAMCOS ? 'All Member AMCOS' : 'Featured AMCOS'}
        </h2>

        <div style={{ marginBottom: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <div style={{ display: 'flex', gap: '1rem', width: '100%' }}>
            <div style={{ position: 'relative', flexGrow: 1 }}>
              <Search style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: '#6b7280' }} size={20} />
              <input
                ref={inputRef} // Attach the ref to the input
                type="text"
                placeholder="Search by AMCOS name..."
                value={searchTerm}
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                  if (inputRef.current) {
                    inputRef.current.focus(); // Re-focus the input after state update
                  }
                }}
                style={{
                  width: '100%',
                  padding: '0.75rem 1.5rem 0.75rem 40px',
                  borderRadius: '8px',
                  border: '1px solid #d1d5db',
                  fontSize: '1rem',
                  color: '#374151',
                }}
              />
            </div>
            <div style={{ position: 'relative' }}>
              <Filter style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: '#6b7280' }} size={20} />
              <select
                value={selectedDistrict}
                onChange={(e) => setSelectedDistrict(e.target.value)}
                style={{
                  width: '100%',
                  padding: '0.75rem 1.5rem 0.75rem 40px',
                  borderRadius: '8px',
                  border: '1px solid #d1d5db',
                  fontSize: '1rem',
                  color: '#374151',
                  appearance: 'none',
                  backgroundColor: 'white',
                  cursor: 'pointer'
                }}
              >
                <option value="all">All Districts</option>
                <option value="Karagwe">Karagwe</option>
                <option value="Kyerwa">Kyerwa</option>
              </select>
            </div>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
          {displayedAMCOS.map((amcos, index) => (
            <div
              key={`${amcos.name}-${amcos.district}-${amcos.ward}-${amcos.registrationNo || 'null'}`} // Improved key for stability
              style={{
                backgroundColor: '#f9fafb',
                padding: '2rem',
                borderRadius: '12px',
                boxShadow: '0 4px 15px rgba(0,0,0,0.08)',
                transition: 'transform 0.3s, box-shadow 0.3s',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)';
                e.currentTarget.style.boxShadow = '0 8px 25px rgba(0,0,0,0.12)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 15px rgba(0,0,0,0.08)';
              }}
            >
              <Users size={40} color="#FEA116" style={{ marginBottom: '1.5rem' }} />
              <h3 style={{ fontSize: '1.8rem', fontWeight: 'bold', color: '#1f2937', marginBottom: '0.75rem' }}>
                {amcos.name}
              </h3>
              <p style={{ color: '#4b5563', fontSize: '1rem', marginBottom: '0.5rem' }}>
                <MapPin size={16} style={{ display: 'inline-block', marginRight: '0.5rem', verticalAlign: 'middle' }} />
                District: {amcos.district}
              </p>
              {amcos.ward && (
                <p style={{ color: '#4b5563', fontSize: '1rem', marginBottom: '0.5rem' }}>
                  Ward: {amcos.ward}
                </p>
              )}
              {amcos.registrationNo && (
                <p style={{ color: '#4b5563', fontSize: '1rem', marginBottom: '0.5rem' }}>
                  Registration No: {amcos.registrationNo}
                </p>
              )}
              {amcos.members && (
                <p style={{ color: '#4b5563', fontSize: '1rem', marginBottom: '0.5rem' }}>
                  Members: {amcos.members}
                </p>
              )}
              {amcos.established && (
                <p style={{ color: '#4b5563', fontSize: '1rem', marginBottom: '1.5rem' }}>
                  Established: {amcos.established}
                </p>
              )}
              <a href="#" style={{
                color: '#FEA116',
                fontWeight: '600',
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}
              onMouseEnter={(e) => e.target.style.textDecoration = 'underline'}
              onMouseLeave={(e) => e.target.style.textDecoration = 'none'}
              >
                Learn More <Eye size={16} />
              </a>
            </div>
          ))}
        </div>

        {!showAllAMCOS && filteredAMCOS.length > featuredAMCOS.length && (
          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <button
              onClick={() => setShowAllAMCOS(true)}
              style={{
                backgroundColor: '#FEA116',
                color: 'white',
                border: 'none',
                padding: '0.9rem 2rem',
                borderRadius: '8px',
                cursor: 'pointer',
                fontSize: '1.1rem',
                fontWeight: '600',
                transition: 'all 0.3s',
                boxShadow: '0 4px 10px rgba(254, 161, 22, 0.3)'
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = '#e4950f';
                e.target.style.transform = 'translateY(-2px)';
                e.target.style.boxShadow = '0 6px 15px rgba(254, 161, 22, 0.4)';
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = '#FEA116';
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = '0 4px 10px rgba(254, 161, 22, 0.3)';
              }}
            >
              Show All AMCOS ({filteredAMCOS.length})
            </button>
          </div>
        )}
      </div>
    </section>
  );

  const CTASection = () => (
    <section style={{ backgroundColor: '#f8f9fa', padding: '4rem 0' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
        <div style={{
          backgroundColor: '#FEA116',
          backgroundImage: 'linear-gradient(to right, #FEA116, #e4950f)',
          color: 'white',
          padding: '3rem',
          borderRadius: '15px',
          textAlign: 'center',
          boxShadow: '0 10px 30px rgba(254, 161, 22, 0.4)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <TrendingUp size={60} style={{ marginBottom: '1.5rem', color: 'rgba(255,255,255,0.9)' }} />
          <h2 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '1rem', lineHeight: '1.2' }}>
            Grow With Us
          </h2>
          <p style={{ fontSize: '1.1rem', maxWidth: '700px', marginBottom: '2rem', color: 'rgba(255,255,255,0.9)' }}>
            Join our network of successful AMCOS and unlock new opportunities for growth,
            market access, and community development.
          </p>
          <button style={{
            backgroundColor: 'white',
            color: '#FEA116',
            border: 'none',
            padding: '1rem 2.5rem',
            borderRadius: '8px',
            cursor: 'pointer',
            fontSize: '1.1rem',
            fontWeight: '700',
            transition: 'all 0.3s',
            boxShadow: '0 4px 15px rgba(0,0,0,0.2)'
          }}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = '#f0f0f0';
            e.target.style.transform = 'translateY(-2px)';
            e.target.style.boxShadow = '0 6px 20px rgba(0,0,0,0.3)';
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = 'white';
            e.target.style.transform = 'translateY(0)';
            e.target.style.boxShadow = '0 4px 15px rgba(0,0,0,0.2)';
          }}
          >
            Become a Member
          </button>
        </div>
      </div>
    </section>
  );

  const ContactSection = () => (
    <section style={{ padding: '4rem 0', backgroundColor: '#ffffff' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          backgroundColor: '#f0f4f8',
          padding: '3rem',
          borderRadius: '15px',
          boxShadow: '0 8px 25px rgba(0,0,0,0.08)'
        }}>
          <MapPin size={50} color="#1f2937" style={{ marginBottom: '1.5rem' }} />
          <h2 style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#1f2937', marginBottom: '1rem' }}>
            Get in Touch
          </h2>
          <p style={{ fontSize: '1.1rem', color: '#4b5563', marginBottom: '2rem', maxWidth: '700px' }}>
            Have questions or need support? Our team is here to help. Reach out to us for more information about AMCOS operations and membership.
          </p>
          <div style={{
            display: 'flex', // Changed from 'grid' to 'flex'
            justifyContent: 'center', // Added to center the cards
            gap: '2rem',
            width: '100%',
            maxWidth: '900px'
          }}>
            <div style={{
              backgroundColor: 'white',
              padding: '2rem',
              borderRadius: '10px',
              boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
              borderTop: '5px solid #FEA116'
            }}>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#1f2937', marginBottom: '1rem' }}>
                General Inquiries
              </h3>
              <p style={{ color: '#6b7280', marginBottom: '1.5rem' }}>
                For any general questions about our cooperative and services.
              </p>
              <a href="mailto:info@example.com" style={{
                color: '#FEA116',
                fontWeight: '600',
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}
              onMouseEnter={(e) => e.target.style.textDecoration = 'underline'}
              onMouseLeave={(e) => e.target.style.textDecoration = 'none'}
              >
                Email Us
              </a>
            </div>
            <div style={{
              backgroundColor: 'white',
              padding: '2rem',
              borderRadius: '10px',
              boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
              borderTop: '5px solid #FEA116'
            }}>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#1f2937', marginBottom: '1rem' }}>
                Membership Support
              </h3>
              <p style={{ color: '#6b7280', marginBottom: '1.5rem' }}>
                Reach out to our dedicated team for membership-related assistance.
              </p>
              <a href="tel:+1234567890" style={{
                color: '#FEA116',
                fontWeight: '600',
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}
              onMouseEnter={(e) => e.target.style.textDecoration = 'underline'}
              onMouseLeave={(e) => e.target.style.textDecoration = 'none'}
              >
                Call Us
              </a>
            </div>
            <div style={{
              backgroundColor: 'white',
              padding: '2rem',
              borderRadius: '10px',
              boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
              borderTop: '5px solid #FEA116'
            }}>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#1f2937', marginBottom: '1rem' }}>
                Get Started
              </h3>
              <p style={{ color: '#6b7280', marginBottom: '1.5rem' }}>
                Ready to join our cooperative network? Contact our membership team for guidance and support.
              </p>
              <button style={{
                backgroundColor: '#FEA116',
                color: 'white',
                border: 'none',
                padding: '0.75rem 1.5rem',
                borderRadius: '8px',
                cursor: 'pointer',
                fontSize: '1rem',
                fontWeight: '600',
                transition: 'all 0.3s'
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = '#e4950f';
                e.target.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = '#FEA116';
                e.target.style.transform = 'translateY(0)';
              }}
              >
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );

  return (
    <div style={{ fontFamily: 'Arial, sans-serif' }}>
      <AMCOSHeroSection />
      <AMCOSStatsSection />
      <AMCOSSection />
      <CTASection />
      <ContactSection />
    </div>
  );
};

export default AMCOSPage;