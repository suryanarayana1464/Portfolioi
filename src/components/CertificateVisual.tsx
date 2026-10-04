import React from 'react';
import { Award, ShieldCheck, CheckCircle2, GraduationCap, QrCode } from 'lucide-react';
import { CertificateItem } from '../data/portfolioData';

interface CertificateVisualProps {
  certificate: CertificateItem;
  size?: 'thumb' | 'full';
}

export const CertificateVisual: React.FC<CertificateVisualProps> = ({ certificate, size = 'thumb' }) => {
  const isFull = size === 'full';
  
  const isSimplilearn = certificate.organization?.toLowerCase().includes('simplilearn') || certificate.certificateCode === '10349651';
  const isAppGenesis = certificate.organization?.toLowerCase().includes('app genesis') || 
                       certificate.credentialId === 'EMP5-ICERT400007' || 
                       certificate.title.toLowerCase().includes('vlsi');
  const isNptel = certificate.organization?.toLowerCase().includes('nptel') || 
                  certificate.credentialId?.startsWith('NPTEL') || 
                  (certificate.title.toLowerCase().includes('internet of things') && certificate.organization?.toLowerCase().includes('nptel'));
  const isSkillDzire = certificate.organization?.toLowerCase().includes('skilld') || 
                       certificate.credentialId?.includes('SDST-');
  const isPurpleLaneMern = (certificate.organization?.toLowerCase().includes('purplelane') || certificate.credentialId?.includes('PL-')) &&
                           certificate.title.toLowerCase().includes('mern');
  const isPurpleLaneGenAI = (certificate.organization?.toLowerCase().includes('purplelane') || certificate.credentialId?.includes('PL-')) &&
                            (certificate.title.toLowerCase().includes('genai') || certificate.title.toLowerCase().includes('ai'));
  const isCiscoPython = certificate.organization?.toLowerCase().includes('cisco') || 
                        certificate.organization?.toLowerCase().includes('python institute') ||
                        certificate.title.toLowerCase().includes('python');
  const isNodeRed = certificate.organization?.toLowerCase().includes('node-red') || 
                    certificate.organization?.toLowerCase().includes('flowfuse') || 
                    certificate.title.toLowerCase().includes('node-red') ||
                    certificate.credentialId === '6ab0fc0cddc706a659046426';

  // 1. Official Simplilearn SkillUp certificate
  if (isSimplilearn) {
    return (
      <div
        className={`w-full h-full relative flex flex-col justify-between select-none bg-[#fcfcfd] text-slate-800 overflow-hidden shadow-inner font-sans border border-slate-200 ${
          isFull ? 'min-h-[420px] md:min-h-[480px] p-6 md:p-10' : 'min-h-[210px] p-4'
        }`}
      >
        <div className="absolute inset-1.5 md:inset-2.5 border-2 border-slate-700/60 pointer-events-none rounded-sm">
          <div className="absolute -top-[2px] -left-[2px] w-6 h-6 border-t-4 border-l-4 border-amber-500" />
          <div className="absolute -bottom-[2px] -left-[2px] w-6 h-6 border-b-4 border-l-4 border-amber-500" />
          <div className="absolute -top-[2px] -right-[2px] w-6 h-6 border-t-4 border-r-4 border-amber-500" />
          <div className="absolute -bottom-[2px] -right-[2px] w-6 h-6 border-b-4 border-r-4 border-amber-500" />
        </div>

        <div className="absolute top-0 right-10 md:right-16 w-8 md:w-14 h-full bg-[#0a1e38] flex items-center justify-center border-l-2 border-r-2 border-amber-400/90 pointer-events-none z-0">
          <div className="w-0.5 md:w-1 h-full bg-amber-400/30" />
        </div>

        <div className="absolute top-12 left-0 w-3 h-10 bg-gradient-to-r from-blue-600 to-amber-500 pointer-events-none" />
        <div className="absolute bottom-12 left-0 w-3 h-10 bg-gradient-to-r from-blue-600 to-amber-500 pointer-events-none" />

        <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none opacity-[0.06] select-none z-0">
          <span className="text-5xl md:text-8xl font-black tracking-widest uppercase text-slate-800">
            VERIFIED
          </span>
          <div className="flex gap-2 text-2xl md:text-3xl text-slate-700 mt-1">
            <span>★</span>
            <span>★</span>
            <span>★</span>
          </div>
        </div>

        <div className="relative z-10 flex items-start justify-between">
          <div className="flex items-center gap-1.5 md:gap-2">
            <span className="font-extrabold text-base md:text-xl tracking-tight text-slate-800">
              simpl<span className="text-amber-500 font-bold">i</span>learn
            </span>
            <div className="flex items-center gap-1 bg-cyan-600/10 text-cyan-600 px-2 py-0.5 rounded font-bold text-xs md:text-sm">
              <GraduationCap className="w-3.5 h-3.5 text-amber-500" />
              <span>Skill<span className="text-amber-500">UP</span></span>
            </div>
          </div>

          <div className="text-right pr-12 md:pr-20">
            <span className="text-[9px] md:text-xs text-emerald-700 font-bold tracking-wider uppercase bg-emerald-100/80 px-2 py-0.5 rounded border border-emerald-300">
              Official Credential
            </span>
          </div>
        </div>

        <div className="relative z-10 my-auto py-2 pr-12 md:pr-20">
          <div className="mb-2">
            <span className="text-[10px] md:text-xs uppercase tracking-widest text-slate-500 font-medium block">
              CERTIFICATE OF
            </span>
            <h3 className="text-xl md:text-3xl font-serif font-extrabold tracking-tight text-[#162438] leading-tight">
              COMPLETION
            </h3>
          </div>

          <div className="mb-2 pb-1.5 border-b border-dashed border-slate-400/80 max-w-md">
            <h4 className="text-lg md:text-2xl font-bold tracking-normal text-slate-900 font-sans">
              {certificate.recipientName || 'YADLA SURYANARAYANA'}
            </h4>
          </div>

          <div className="space-y-1">
            <p className="text-[10px] md:text-xs text-slate-600">
              has successfully completed the online course:
            </p>
            <p className="text-xs md:text-base font-bold text-slate-900 leading-snug">
              {certificate.title}
            </p>
            {isFull && (
              <p className="text-[11px] text-slate-500 max-w-lg leading-relaxed mt-1 hidden md:block">
                This professional has demonstrated initiative and a commitment to deepening their skills and advancing their career. Well done!
              </p>
            )}
          </div>
        </div>

        <div className="relative z-10 flex items-end justify-between pt-2 border-t border-slate-200">
          <div className="text-[10px] md:text-xs text-slate-600 space-y-0.5">
            <div>
              <span className="font-semibold text-slate-800">15<sup>th</sup> June 2026</span>
            </div>
            <div className="font-mono text-[9px] md:text-[11px] text-slate-500">
              Certificate code :<span className="font-bold text-slate-700">{certificate.certificateCode || '10349651'}</span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="text-right">
              <div className="font-serif italic text-sm md:text-lg text-slate-800 font-bold leading-none">
                Krishna Kumar
              </div>
              <div className="w-20 md:w-28 h-px bg-slate-400 ml-auto my-1" />
              <span className="text-[9px] md:text-xs text-slate-700 block font-semibold leading-none">Krishna Kumar</span>
              <span className="text-[8px] md:text-[10px] text-slate-500 block leading-tight">CEO, Simplilearn</span>
            </div>

            <div className="relative flex items-center justify-center">
              <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-gradient-to-tr from-amber-400 via-amber-200 to-amber-500 p-0.5 shadow-md flex items-center justify-center">
                <div className="w-full h-full rounded-full bg-amber-50 flex flex-col items-center justify-center border border-amber-400 text-center">
                  <div className="text-amber-700 font-black text-xs md:text-sm">|:i|</div>
                  <span className="text-[6px] md:text-[7.5px] font-bold text-amber-900 tracking-tighter uppercase">Verified</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // 2. Official App Genesis & APSCHE Internship Certificate
  if (isAppGenesis) {
    return (
      <div
        className={`w-full h-full relative flex flex-col justify-between select-none bg-[#ffffff] text-slate-800 overflow-hidden shadow-md font-sans border-2 border-slate-300 ${
          isFull ? 'min-h-[420px] md:min-h-[480px] p-6 md:p-10' : 'min-h-[210px] p-3 md:p-4'
        }`}
      >
        <div className="absolute inset-1.5 md:inset-2.5 border border-slate-300 pointer-events-none rounded-xs" />

        <div className="relative z-10 flex items-center justify-between pb-1.5 border-b border-slate-200">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 md:w-8 md:h-8 rounded bg-red-800 text-white flex items-center justify-center text-[7px] md:text-[9px] font-bold leading-none">
              APSCHE
            </div>
            <div className="w-6 h-6 md:w-8 md:h-8 rounded-full border border-emerald-600 bg-emerald-50 text-emerald-900 flex items-center justify-center text-[6px] md:text-[7.5px] font-bold leading-none">
              AP GOVT
            </div>
          </div>

          <div className="text-right">
            <h4 className="font-extrabold text-sm md:text-lg text-slate-900 leading-none">
              App Genesis
            </h4>
            <span className="text-[7.5px] md:text-[9.5px] text-slate-500 font-medium">
              Soft Solutions Pvt Ltd
            </span>
          </div>
        </div>

        <div className="relative z-10 text-center my-auto py-1">
          <p className="text-[8px] md:text-[10px] uppercase font-bold tracking-widest text-slate-600 mb-0.5 font-mono">
            AP INTERNSHIP PROGRAM
          </p>

          <div className="inline-block bg-[#2f9e44] text-white font-bold text-[10px] md:text-sm px-6 md:px-10 py-0.5 md:py-1 rounded-full uppercase tracking-wider mb-2 shadow-xs">
            CERTIFICATE OF COMPLETION
          </div>

          <p className="text-[8.5px] md:text-xs text-slate-700 leading-relaxed max-w-2xl mx-auto">
            This is to certify that <span className="font-bold text-slate-900">{certificate.recipientName || 'Ms./Mr. Suryanarayana Yadla'}</span>, Electronics and Communication Technology., 7th Sem, <span className="font-semibold text-slate-900">23K61A1464</span> under <span className="font-bold text-slate-900">SASI INSTITUTE OF TECHNOLOGY AND ENGINEERING</span> of Jawaharlal Nehru Technological University, Kakinada has successfully completed Short-Term Internship from <span className="font-bold text-slate-900">11 May 2026 to 08 Jul 2026</span> on <span className="font-bold text-slate-950">VLSI and Embedded Systems</span>, organized by <span className="font-bold text-slate-900">APP GENESIS SOFT SOLUTIONS PRIVATE LIMITED</span> in collaboration with Andhra Pradesh State Council of Higher Education.
          </p>
        </div>

        <div className="relative z-10 grid grid-cols-4 gap-2 text-[8px] md:text-[10px] py-1 border-y border-slate-200 my-1">
          <div>
            <span className="text-slate-500 font-semibold block uppercase">DURATION</span>
            <span className="font-bold text-slate-900">2 months</span>
          </div>
          <div>
            <span className="text-slate-500 font-semibold block uppercase">ISSUED ON</span>
            <span className="font-bold text-slate-900">July 08, 2026</span>
          </div>
          <div>
            <span className="text-slate-500 font-semibold block uppercase">PLACE</span>
            <span className="font-bold text-slate-900">Not specified</span>
          </div>
          <div className="text-right">
            <span className="text-slate-500 font-semibold block uppercase">STATUS</span>
            <span className="font-bold text-emerald-700">Verified & Approved</span>
          </div>
        </div>

        <div className="relative z-10 flex items-end justify-between pt-1">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 md:w-14 md:h-14 rounded-full border border-blue-600/80 p-0.5 flex items-center justify-center text-center text-blue-900 text-[5px] md:text-[7px] font-bold uppercase leading-tight">
              <span>APP GENESIS SOFT SOLUTIONS PVT. LTD.</span>
            </div>
            <div>
              <div className="font-serif italic text-xs md:text-sm text-slate-800 font-bold">App Genesis</div>
              <span className="text-[7px] md:text-[9px] text-slate-600 block">Authorized Signatory</span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <div className="w-8 h-8 md:w-10 md:h-10 bg-slate-900 p-0.5 rounded text-white flex items-center justify-center">
              <QrCode className="w-full h-full" />
            </div>
            <div className="text-right text-[7px] md:text-[9px] text-slate-600">
              <div className="font-bold text-slate-900">VERIFICATION</div>
              <div>ID: <span className="font-mono font-bold text-blue-700">EMP5-ICERT400007</span></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // 3. Official NPTEL & IIT Kharagpur (Swayam) Elite Certificate
  if (isNptel) {
    return (
      <div
        className={`w-full h-full relative flex flex-col justify-between select-none bg-[#ffffff] text-slate-800 overflow-hidden shadow-md font-sans border-2 border-slate-300 ${
          isFull ? 'min-h-[420px] md:min-h-[480px] p-6 md:p-8' : 'min-h-[210px] p-3 md:p-4'
        }`}
      >
        <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-[#b91c1c] text-white font-extrabold text-[10px] md:text-xs px-8 md:px-14 py-0.5 rounded-b-md shadow-xs uppercase tracking-widest z-20">
          Elite
        </div>

        <div className="relative z-10 flex items-center justify-between pb-2 border-b border-slate-200">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 md:w-9 md:h-9 rounded-full bg-gradient-to-tr from-amber-500 to-rose-600 flex items-center justify-center text-white font-black text-xs">
              ✦
            </div>
            <div>
              <h4 className="font-black text-xs md:text-base text-[#800000] tracking-tight leading-none uppercase">
                NPTEL ONLINE CERTIFICATION
              </h4>
              <span className="text-[7.5px] md:text-[9.5px] text-slate-600 font-medium">
                (Funded by the MoE, Govt. of India)
              </span>
            </div>
          </div>

          <div className="flex items-center gap-1.5">
            <div className="text-right leading-none">
              <span className="font-bold text-[8.5px] md:text-xs text-slate-900 block">Skill India</span>
              <span className="text-[6px] md:text-[8px] text-slate-500">कौशल भारत</span>
            </div>
          </div>
        </div>

        <div className="relative z-10 text-center my-auto py-1">
          <p className="text-[8px] md:text-xs text-slate-600">This certificate is awarded to</p>
          <h3 className="font-black text-base md:text-2xl text-slate-900 tracking-tight uppercase my-0.5">
            {certificate.recipientName || 'YADLA SURYANARAYANA'}
          </h3>
          <p className="text-[8px] md:text-xs text-slate-600">for successfully completing the course</p>
          <h4 className="font-extrabold text-xs md:text-lg text-slate-900 my-0.5">
            Introduction to Internet of Things
          </h4>

          <div className="inline-flex items-center gap-3 bg-slate-50 border border-slate-300 rounded p-1.5 md:p-2 my-1 text-[8.5px] md:text-xs">
            <div>
              with a consolidated score of <span className="font-black text-slate-950 text-xs md:text-sm">80 %</span>
            </div>
            <div className="h-4 w-px bg-slate-300" />
            <div>
              Online Assignments: <span className="font-bold text-slate-900">24.16/25</span>
            </div>
            <div className="h-4 w-px bg-slate-300" />
            <div>
              Proctored Exam: <span className="font-bold text-slate-900">55.5/75</span>
            </div>
          </div>

          <p className="text-[7.5px] md:text-[9.5px] text-slate-500">
            Total number of candidates certified in this course: <span className="font-bold text-slate-800">43953</span>
          </p>
        </div>

        <div className="relative z-10 flex items-center justify-between text-[7.5px] md:text-[9.5px] text-slate-700 py-1 border-t border-slate-200">
          <div>
            <div className="font-bold text-slate-900">Jan-Apr 2026</div>
            <div className="text-slate-500">(12 week course)</div>
          </div>

          <div className="text-center">
            <div className="font-bold text-slate-900">Indian Institute of Technology Kharagpur</div>
            <div className="font-semibold text-blue-800 text-[8px] md:text-[10px]">swayam</div>
          </div>

          <div className="text-right">
            <div className="font-serif italic font-bold text-slate-900 text-xs md:text-sm">Haimanti Banerji</div>
            <div className="w-16 md:w-20 h-px bg-slate-400 ml-auto my-0.5" />
            <div className="font-bold text-[7px] md:text-[8.5px]">Prof. Haimanti Banerji</div>
            <div className="text-slate-500 text-[6.5px] md:text-[8px]">Coordinator, NPTEL, IIT Kharagpur</div>
          </div>
        </div>

        <div className="relative z-10 bg-[#800000] text-white px-3 py-1 -mx-3 -mb-3 md:-mx-8 md:-mb-8 flex items-center justify-between text-[7.5px] md:text-[9.5px] font-mono">
          <div>Roll No: <span className="font-bold">NPTEL26CS37S850100346</span></div>
          <div>No. of credits recommended: <span className="font-bold">4</span></div>
        </div>
      </div>
    );
  }

  // 4. Official SkillDzire & AICTE Internship Certificate
  if (isSkillDzire) {
    return (
      <div
        className={`w-full h-full relative flex flex-col justify-between select-none bg-[#ffffff] text-slate-800 overflow-hidden shadow-md font-sans border-2 border-slate-300 ${
          isFull ? 'min-h-[420px] md:min-h-[480px] p-6 md:p-8' : 'min-h-[210px] p-3 md:p-4'
        }`}
      >
        <div className="relative z-10 flex items-center justify-between pb-1.5 border-b border-slate-200">
          <div className="flex items-center gap-1.5">
            <div className="w-6 h-6 md:w-7 md:h-7 rounded bg-red-600 text-white flex items-center justify-center font-black text-xs">
              S
            </div>
            <div>
              <span className="font-black text-sm md:text-lg tracking-tight text-slate-900">
                Skill<span className="text-red-600">Dzîre</span>
              </span>
            </div>
          </div>

          <div className="flex items-center gap-1">
            <div className="w-6 h-6 md:w-8 md:h-8 rounded-full border-2 border-amber-500 bg-amber-50 flex items-center justify-center text-amber-900 text-[6px] md:text-[8px] font-black">
              AICTE
            </div>
            <div className="text-right leading-none">
              <span className="text-[6.5px] md:text-[8.5px] font-bold text-slate-900 block">AICTE Approved</span>
              <span className="text-[5.5px] md:text-[7.5px] text-slate-500">Internship Partner</span>
            </div>
          </div>
        </div>

        <div className="relative z-10 text-center my-auto py-1">
          <div className="inline-block bg-[#e03131] text-white font-black text-[10px] md:text-sm px-6 md:px-12 py-0.5 md:py-1 rounded-sm shadow-xs uppercase tracking-wider mb-2">
            CERTIFICATE OF INTERNSHIP
          </div>

          <p className="text-[8px] md:text-xs text-slate-600">This is to Certify that Mr./Ms</p>
          <h3 className="font-extrabold text-base md:text-2xl text-slate-950 tracking-tight underline decoration-amber-400 my-0.5">
            {certificate.recipientName || 'Yadla Suryanaryana'}
          </h3>

          <p className="text-[8px] md:text-xs text-slate-700 leading-relaxed max-w-xl mx-auto">
            Enrolled in the <span className="font-bold text-slate-900">Electronics and Communication Engineering - 23K61A1464</span><br />
            From College <span className="font-bold text-slate-900">Sasi Institute Of Technology And Engineering</span> of university <span className="font-bold text-slate-900">JNTUK, Kakinada</span><br />
            has Successfully Completed short-term Internship programme titled<br />
            <span className="font-black text-xs md:text-base text-slate-950 block my-0.5">Internet of Things (IOT)</span>
            Under SkillDzire from <span className="font-bold text-slate-900">05-May-2025 to 20-Jun-2025</span> Organized By <span className="font-bold text-slate-900">SkillDzire</span>
          </p>
        </div>

        <div className="relative z-10 flex items-end justify-between pt-1 border-t border-slate-200">
          <div className="text-left text-[7.5px] md:text-[9.5px] text-slate-600">
            <div>Certificate ID: <span className="font-mono font-bold text-slate-900">SDST-25-15610</span></div>
            <div>Issued On: <span className="font-bold text-slate-800">20-Jun-2025</span></div>
          </div>

          <div className="flex items-center gap-1.5 text-right">
            <div className="w-8 h-8 md:w-10 md:h-10 bg-slate-900 p-0.5 rounded text-white flex items-center justify-center">
              <QrCode className="w-full h-full" />
            </div>
            <div>
              <div className="font-serif italic text-xs md:text-sm text-slate-800 font-bold">SkillDzire</div>
              <span className="text-[6.5px] md:text-[8px] text-slate-600 block">Authorized Signature</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // 5. Official PurpleLane MERN Stack Workshop Certificate (YADLA SURYANARYANA.jpg)
  if (isPurpleLaneMern) {
    return (
      <div
        className={`w-full h-full relative flex flex-col justify-between select-none bg-[#ffffff] text-slate-800 overflow-hidden shadow-md font-sans border-2 border-slate-200 ${
          isFull ? 'min-h-[420px] md:min-h-[480px] p-6 md:p-10' : 'min-h-[210px] p-4'
        }`}
      >
        {/* Geometric Corner Triangles */}
        <div className="absolute -top-10 -left-10 w-28 md:w-36 h-28 md:h-36 bg-orange-500 transform -rotate-45 pointer-events-none" />
        <div className="absolute -top-6 -left-6 w-24 md:w-32 h-24 md:h-32 bg-[#432371] transform -rotate-45 pointer-events-none opacity-90" />
        <div className="absolute -top-2 -left-2 w-20 md:w-28 h-20 md:h-28 bg-slate-300 transform -rotate-45 pointer-events-none opacity-50" />

        <div className="absolute -bottom-10 -right-10 w-28 md:w-36 h-28 md:h-36 bg-[#432371] transform -rotate-45 pointer-events-none" />
        <div className="absolute -bottom-6 -right-6 w-24 md:w-32 h-24 md:h-32 bg-orange-500 transform -rotate-45 pointer-events-none opacity-90" />

        {/* Top Header: PurpleLane + SASI Autonomous */}
        <div className="relative z-10 flex items-center justify-between pl-8 md:pl-12 pr-4">
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 md:w-7 md:h-7 rounded-full bg-gradient-to-tr from-[#432371] to-purple-600 flex items-center justify-center text-white text-xs font-bold">
              P
            </div>
            <div>
              <span className="font-extrabold text-sm md:text-xl tracking-tight text-[#432371]">
                Purple<span className="text-orange-500">Lane</span>
              </span>
              <span className="text-[7px] md:text-[9px] text-orange-600 font-medium block leading-none">
                Make the right choice
              </span>
            </div>
          </div>

          {/* SASI Autonomous Logo */}
          <div className="text-right">
            <div className="flex items-center gap-1.5 justify-end">
              <div className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-red-600 text-white flex items-center justify-center text-[8px] font-black">
                ⚙
              </div>
              <span className="font-black text-xs md:text-base text-red-600 tracking-tight leading-none uppercase">
                SASI
              </span>
            </div>
            <span className="text-[6.5px] md:text-[8px] text-slate-600 font-bold block uppercase tracking-tighter">
              INSTITUTE OF TECHNOLOGY & ENGINEERING
            </span>
            <span className="text-[5.5px] md:text-[7px] text-blue-700 font-bold block uppercase">
              AUTONOMOUS • TADEPALLIGUDEM
            </span>
          </div>
        </div>

        {/* Center Content */}
        <div className="relative z-10 my-auto py-1 text-center">
          <h3 className="font-serif font-black text-2xl md:text-4xl text-[#1e1e38] tracking-tight leading-none mb-1 uppercase">
            CERTIFICATE
          </h3>

          <div className="inline-block bg-gradient-to-r from-amber-400 to-amber-500 text-slate-900 font-extrabold text-[9px] md:text-xs px-8 md:px-12 py-0.5 md:py-1 rounded-sm shadow-xs uppercase tracking-widest mb-2">
            OF COMPLETION
          </div>

          <p className="text-[8.5px] md:text-xs text-slate-600 font-medium mb-1">
            This certificate is proudly presented to
          </p>

          <div className="max-w-md mx-auto mb-1 pb-1 border-b-2 border-amber-400">
            <h4 className="text-base md:text-2xl font-black text-[#1e1e38] tracking-normal uppercase">
              {certificate.recipientName || 'YADLA SURYANARYANA'}
            </h4>
          </div>

          <p className="text-[8px] md:text-xs text-slate-700 mt-1 max-w-xl mx-auto">
            on successfully completing the 2 weeks workshop with <span className="font-bold text-slate-900">PurpleLane on MERN stack</span>.
          </p>
        </div>

        {/* Footer: Date + Medallions + Signature */}
        <div className="relative z-10 grid grid-cols-3 items-end pt-2 border-t border-slate-100 pl-8 md:pl-12 pr-8 md:pr-12">
          <div className="text-left text-[8px] md:text-[10px]">
            <div className="font-bold text-slate-900 text-[10px] md:text-xs font-mono">
              18-10-2025
            </div>
            <div className="w-14 md:w-20 h-0.5 bg-orange-500 mt-0.5" />
            <span className="text-[7.5px] md:text-[9px] text-slate-500 font-semibold block uppercase tracking-wider mt-0.5">
              ISSUED DATE
            </span>
          </div>

          {/* Double Medallions */}
          <div className="flex items-center justify-center gap-2">
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-amber-500 bg-amber-50 p-0.5 flex flex-col items-center justify-center text-center text-[5px] md:text-[6px] font-bold text-amber-900">
              <span>★ VERIFIED ★</span>
              <span className="text-[6.5px] md:text-[8px] font-black text-blue-900">ACHIEVEMENT</span>
            </div>
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-blue-900 bg-blue-50 p-0.5 flex flex-col items-center justify-center text-center text-[5px] md:text-[6px] font-bold text-blue-900">
              <span>ISO 9001:2015</span>
              <span className="text-[6.5px] md:text-[8px] font-black text-amber-600">CERTIFIED</span>
            </div>
          </div>

          <div className="text-right text-[8px] md:text-[10px]">
            <div className="font-serif italic text-xs md:text-base text-slate-900 font-bold leading-tight">
              K. Santosh Srinivas
            </div>
            <div className="w-24 md:w-32 h-px bg-slate-400 ml-auto my-0.5" />
            <span className="font-bold text-slate-900 text-[8px] md:text-[10px] block leading-tight">
              KARROTU SANTOSH SRINIVAS
            </span>
            <span className="text-[7px] md:text-[8.5px] text-slate-500 block">
              Founder - PurpleLane
            </span>
          </div>
        </div>
      </div>
    );
  }

  // 6. Official PurpleLane Mastering GenAI Certificate (YADLASURYANARYANA_MasteringGenAI_BuildingAI-PoweredApplications.jpg)
  if (isPurpleLaneGenAI) {
    return (
      <div
        className={`w-full h-full relative flex flex-col justify-between select-none bg-[#ffffff] text-slate-800 overflow-hidden shadow-md font-sans border-2 border-slate-200 ${
          isFull ? 'min-h-[420px] md:min-h-[480px] p-6 md:p-10' : 'min-h-[210px] p-4'
        }`}
      >
        <div className="absolute -top-10 -left-10 w-28 md:w-36 h-28 md:h-36 bg-orange-500 transform -rotate-45 pointer-events-none" />
        <div className="absolute -top-6 -left-6 w-24 md:w-32 h-24 md:h-32 bg-[#432371] transform -rotate-45 pointer-events-none opacity-90" />
        <div className="absolute -top-2 -left-2 w-20 md:w-28 h-20 md:h-28 bg-slate-300 transform -rotate-45 pointer-events-none opacity-50" />

        <div className="absolute -bottom-10 -right-10 w-28 md:w-36 h-28 md:h-36 bg-[#432371] transform -rotate-45 pointer-events-none" />
        <div className="absolute -bottom-6 -right-6 w-24 md:w-32 h-24 md:h-32 bg-orange-500 transform -rotate-45 pointer-events-none opacity-90" />

        <div className="relative z-10 flex items-center justify-between pl-8 md:pl-12 pr-4">
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 md:w-7 md:h-7 rounded-full bg-gradient-to-tr from-[#432371] to-purple-600 flex items-center justify-center text-white text-xs font-bold">
              P
            </div>
            <div>
              <span className="font-extrabold text-sm md:text-xl tracking-tight text-[#432371]">
                Purple<span className="text-orange-500">Lane</span>
              </span>
              <span className="text-[7px] md:text-[9px] text-orange-600 font-medium block leading-none">
                Make the right choice
              </span>
            </div>
          </div>

          <div className="w-12 h-12 md:w-16 md:h-16 rounded-full border-2 border-amber-600 p-0.5 flex items-center justify-center bg-amber-50/80 shadow-sm text-center">
            <div className="w-full h-full rounded-full border border-dashed border-amber-700 flex flex-col items-center justify-center text-[5.5px] md:text-[7px] font-bold text-amber-900 leading-tight">
              <span>CERTIFIED</span>
              <span className="text-[7px] md:text-[9px] font-black text-slate-900 my-0.5">ISO</span>
              <span className="text-[4.5px] md:text-[6px]">9001-2015</span>
              <span>COMPANY</span>
            </div>
          </div>
        </div>

        <div className="relative z-10 my-auto py-1 text-center">
          <h3 className="font-black text-2xl md:text-4xl text-[#1e1e38] tracking-tight leading-none mb-1 uppercase font-sans">
            CERTIFICATE
          </h3>

          <div className="inline-block bg-gradient-to-r from-orange-500 to-amber-500 text-white font-bold text-[9px] md:text-xs px-6 md:px-10 py-0.5 md:py-1 rounded-sm shadow-xs uppercase tracking-widest mb-2">
            OF PARTICIPATION
          </div>

          <p className="text-[8.5px] md:text-xs text-slate-600 font-medium mb-1">
            This is to certify that Mr./ Ms
          </p>

          <div className="max-w-md mx-auto mb-1 pb-1 border-b-2 border-amber-400">
            <h4 className="text-base md:text-2xl font-extrabold text-[#1e1e38] tracking-normal uppercase">
              {certificate.recipientName || 'YADLA SURYANARYANA'}
            </h4>
          </div>

          <p className="text-[8px] md:text-xs text-slate-600 mt-1">
            has successfully completed the 2-week workshop on
          </p>

          <h5 className="font-extrabold text-xs md:text-lg text-slate-900 leading-snug mt-1 max-w-xl mx-auto">
            Mastering GenAI: Building AI-Powered Applications
          </h5>
        </div>

        <div className="relative z-10 grid grid-cols-3 items-end pt-2 border-t border-slate-100 pl-8 md:pl-12 pr-8 md:pr-12">
          <div className="text-left text-[8px] md:text-[10px]">
            <div className="font-bold text-slate-900 text-[10px] md:text-xs font-mono">
              03-01-2026
            </div>
            <div className="w-14 md:w-20 h-0.5 bg-orange-500 mt-0.5" />
            <span className="text-[7.5px] md:text-[9px] text-slate-500 font-semibold block uppercase tracking-wider mt-0.5">
              ISSUED DATE
            </span>
          </div>

          <div className="flex items-center justify-center gap-2">
            <div className="text-center">
              <span className="text-[9px] md:text-xs font-black text-blue-900 block font-mono">MSME</span>
              <span className="text-[5.5px] md:text-[7px] text-slate-500 block">MICRO, SMALL & MEDIUM</span>
            </div>
            <div className="text-center">
              <span className="text-[8px] md:text-[10px] font-bold text-slate-900 block">Skill India</span>
              <span className="text-[5.5px] md:text-[7px] text-slate-500 block">कौशल भारत</span>
            </div>
          </div>

          <div className="text-right text-[8px] md:text-[10px]">
            <div className="font-serif italic text-xs md:text-base text-slate-900 font-bold leading-tight">
              Bhavani Prasad
            </div>
            <div className="w-20 md:w-28 h-px bg-slate-400 ml-auto my-0.5" />
            <span className="font-bold text-slate-900 text-[8px] md:text-[10px] block leading-tight">
              BHAVANI PRASAD KARROTU
            </span>
            <span className="text-[7px] md:text-[8.5px] text-slate-500 block">
              Co-Founder | PurpleLane
            </span>
          </div>
        </div>
      </div>
    );
  }

  // 7. Official Cisco Networking Academy & OpenEDG Python Institute Certificate
  if (isCiscoPython) {
    return (
      <div
        className={`w-full h-full relative flex flex-col justify-between select-none bg-[#ffffff] text-slate-800 overflow-hidden shadow-md font-sans border-2 border-slate-300 ${
          isFull ? 'min-h-[420px] md:min-h-[480px] p-6 md:p-8' : 'min-h-[210px] p-3 md:p-4'
        }`}
      >
        <div className="absolute inset-1.5 md:inset-2.5 border-2 border-slate-800/80 pointer-events-none rounded-xs" />

        <div className="relative z-10 flex items-start justify-between">
          <div className="flex items-center gap-1.5">
            <div className="flex items-end gap-[2px] h-6 text-slate-900 font-bold">
              <div className="w-[3px] h-2 bg-slate-900 rounded-xs" />
              <div className="w-[3px] h-4 bg-slate-900 rounded-xs" />
              <div className="w-[3px] h-6 bg-slate-900 rounded-xs" />
              <div className="w-[3px] h-4 bg-slate-900 rounded-xs" />
              <div className="w-[3px] h-2 bg-slate-900 rounded-xs" />
            </div>
            <div className="text-left leading-none">
              <span className="font-bold text-[10px] md:text-sm tracking-tight text-slate-900 block">
                Networking Academy
              </span>
              <span className="font-extrabold text-[8px] md:text-[10px] tracking-widest text-slate-900 uppercase">
                CISCO
              </span>
            </div>
          </div>

          <div className="text-right flex items-center gap-1.5">
            <div>
              <span className="font-black text-xs md:text-base tracking-tight text-slate-900">
                Python
              </span>
              <span className="text-[6.5px] md:text-[8px] text-slate-500 block uppercase font-mono leading-none">
                INSTITUTE
              </span>
            </div>
            <div className="w-5 h-5 md:w-7 md:h-7 rounded bg-blue-600 flex items-center justify-center text-white font-bold text-[9px] md:text-xs">
              PI
            </div>
          </div>
        </div>

        <div className="relative z-10 text-center my-auto py-2">
          <p className="text-[8.5px] md:text-xs text-slate-600">This certificate is awarded to</p>
          <h3 className="font-extrabold text-base md:text-2xl text-blue-700 tracking-normal my-1">
            suryanarayana yadla
          </h3>
          <p className="text-[8.5px] md:text-xs text-slate-600">for successfully completing</p>
          <h4 className="font-black text-base md:text-2xl text-blue-900 tracking-tight my-1">
            Python Essentials 1
          </h4>
          <p className="text-[8px] md:text-xs text-slate-600 max-w-lg mx-auto">
            offered by Networking Academy through the Cisco Networking Academy program.
          </p>
        </div>

        <div className="relative z-10 flex items-end justify-between pt-2 border-t border-slate-200">
          <div className="text-left">
            <div className="font-serif italic text-xs md:text-base text-slate-800 font-bold leading-tight">
              Lynn Bloomer
            </div>
            <div className="w-20 md:w-28 h-px bg-slate-400 my-0.5" />
            <span className="text-[7.5px] md:text-[9.5px] text-slate-700 block font-semibold">Lynn Bloomer</span>
            <span className="text-[6.5px] md:text-[8px] text-slate-500 block leading-tight">Director, Cisco Networking Academy</span>
          </div>

          <div className="text-right text-[8px] md:text-[10px] text-slate-700">
            <div className="font-bold text-slate-900">17 Dec 2024</div>
            <div className="text-slate-500 text-[7px] md:text-[8.5px]">Completion Date</div>
          </div>
        </div>
      </div>
    );
  }

  // 8. Official Node-RED Academy / FlowFuse Certificate
  if (isNodeRed) {
    return (
      <div
        className={`w-full h-full relative flex flex-col justify-between select-none bg-[#ffffff] text-slate-800 overflow-hidden shadow-md font-sans border-2 border-slate-300 ${
          isFull ? 'min-h-[420px] md:min-h-[480px] p-6 md:p-8' : 'min-h-[210px] p-3 md:p-4'
        }`}
      >
        <div className="absolute inset-1.5 md:inset-2.5 border-2 border-[#8f0000]/40 pointer-events-none rounded-xs" />

        {/* Top Node-RED Flow Accent Nodes */}
        <div className="absolute top-2 right-4 flex items-center gap-1 opacity-20 pointer-events-none hidden sm:flex">
          <div className="w-2.5 h-2.5 rounded bg-red-700" />
          <div className="w-4 h-0.5 bg-red-700" />
          <div className="w-3 h-3 rounded-full bg-red-800" />
          <div className="w-4 h-0.5 bg-red-700" />
          <div className="w-2.5 h-2.5 rounded bg-red-700" />
        </div>

        {/* Header */}
        <div className="relative z-10 flex items-center justify-between pb-1.5 border-b border-slate-200">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 md:w-8 md:h-8 rounded bg-[#8f0000] text-white flex items-center justify-center font-black text-xs shadow-xs">
              <span className="tracking-tighter">NR</span>
            </div>
            <div>
              <span className="font-black text-sm md:text-lg tracking-tight text-[#8f0000]">
                Node-RED <span className="text-slate-900">Academy</span>
              </span>
              <span className="text-[6.5px] md:text-[8px] text-slate-500 block uppercase tracking-wider font-semibold leading-none">
                Official Certification Program
              </span>
            </div>
          </div>

          <div className="text-right flex items-center gap-1.5">
            <div className="bg-red-50 border border-red-200 px-2 py-0.5 rounded text-[7.5px] md:text-[9.5px] font-bold text-red-900">
              Sponsored by <span className="text-[#8f0000]">FlowFuse</span>
            </div>
          </div>
        </div>

        {/* Certificate Body */}
        <div className="relative z-10 text-center my-auto py-2">
          <div className="inline-block bg-gradient-to-r from-[#8f0000] to-rose-700 text-white font-extrabold text-[9px] md:text-xs px-6 md:px-10 py-0.5 md:py-1 rounded-full uppercase tracking-widest mb-1.5 shadow-xs">
            CERTIFICATE OF ACHIEVEMENT
          </div>

          <p className="text-[8px] md:text-xs text-slate-600">This is to certify that</p>
          <h3 className="font-extrabold text-base md:text-2xl text-slate-950 tracking-normal my-0.5 uppercase">
            {certificate.recipientName || 'YADLA SURYANARAYANA'}
          </h3>

          <p className="text-[8px] md:text-xs text-slate-600">has successfully completed</p>
          <h4 className="font-black text-base md:text-xl text-[#8f0000] tracking-tight my-0.5">
            Node-RED Advanced
          </h4>

          <p className="text-[7.5px] md:text-[10.5px] text-slate-700 max-w-xl mx-auto leading-relaxed mt-1">
            demonstrating advanced knowledge of flow-based programming, IoT data integration, and systems automation.
          </p>
        </div>

        {/* Footer */}
        <div className="relative z-10 flex items-end justify-between pt-1.5 border-t border-slate-200">
          <div className="text-left text-[7.5px] md:text-[9.5px] text-slate-600">
            <div>Date: <span className="font-bold text-slate-900">21 Sep 2026</span></div>
            <div>Credential ID: <span className="font-mono font-bold text-[#8f0000]">6ab0fc0cddc706a659046426</span></div>
          </div>

          <div className="flex items-center gap-2">
            <div className="w-8 h-8 md:w-9 md:h-9 bg-slate-900 p-0.5 rounded text-white flex items-center justify-center">
              <QrCode className="w-full h-full" />
            </div>
            <div className="text-right">
              <div className="font-serif italic text-xs md:text-sm text-slate-800 font-bold leading-none">
                Node-RED Academy
              </div>
              <span className="text-[6.5px] md:text-[8px] text-slate-500 block leading-tight mt-0.5">
                Authorized Certification
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Default fallback visual
  return (
    <div className="w-full h-full min-h-[210px] bg-slate-900 border border-slate-800 rounded-xl p-4 flex flex-col justify-between text-white">
      <div className="flex items-center justify-between">
        <Award className="w-6 h-6 text-blue-400" />
        <span className="text-xs font-mono text-gray-400">{certificate.year}</span>
      </div>
      <div>
        <h4 className="font-bold text-white text-base">{certificate.title}</h4>
        <p className="text-xs text-blue-400 mt-1">{certificate.organization}</p>
      </div>
      <div className="text-[10px] font-mono text-gray-500 pt-2 border-t border-slate-800">
        ID: {certificate.credentialId}
      </div>
    </div>
  );
};
