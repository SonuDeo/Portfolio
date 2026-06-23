"""Generate a clean one-page resume PDF from Sonu Kumar's resume data."""
from reportlab.lib.pagesizes import LETTER
from reportlab.lib.units import inch
from reportlab.lib.colors import HexColor
from reportlab.pdfgen import canvas

PATH = "public/Sonu_Kumar_Resume.pdf"
W, H = LETTER
M = 0.7 * inch
INK = HexColor("#111827")
SUB = HexColor("#4b5563")
ACC = HexColor("#4f46e5")

c = canvas.Canvas(PATH, pagesize=LETTER)
c.setTitle("Sonu Kumar — Resume")
c.setAuthor("Sonu Kumar")
y = H - M


def line(txt, font="Helvetica", size=9.5, color=INK, dx=0, gap=13):
    global y
    c.setFont(font, size)
    c.setFillColor(color)
    c.drawString(M + dx, y, txt)
    y -= gap


def heading(txt):
    global y
    y -= 5
    c.setFont("Helvetica-Bold", 11)
    c.setFillColor(INK)
    c.drawString(M, y, txt.upper())
    c.setStrokeColor(ACC)
    c.setLineWidth(1.2)
    c.line(M, y - 3, W - M, y - 3)
    y -= 16


# Header
c.setFont("Helvetica-Bold", 22)
c.setFillColor(INK)
c.drawCentredString(W / 2, y, "SONU KUMAR")
y -= 18
c.setFont("Helvetica", 9.5)
c.setFillColor(SUB)
c.drawCentredString(W / 2, y, "+91 9430836870  |  sonudeo346@gmail.com")
y -= 13
c.setFillColor(ACC)
c.drawCentredString(W / 2, y, "github.com/SonuDeo  |  linkedin.com/in/sonu-45-kumar")
y -= 20

heading("Summary")
for t in [
    "Data Analyst & AI Automation Engineer with hands-on experience in Python, SQL, Power BI,",
    "Tableau and data visualization. Skilled in transforming raw data into actionable insights,",
    "building dashboards, and automating workflows with OpenAI, Make.com and n8n.",
]:
    line(t, color=SUB)

heading("Education")
line("B.Tech, Computer Science & Engineering  (2022 - 2026)", "Helvetica-Bold")
line("Indo Global College, Abhipur | I.K. Gujral Punjab Technical University", color=SUB)
line("Intermediate (12th), BSEB - 2021   |   Matriculation (10th), CBSE - 2019", color=SUB)

heading("Skills")
skills = [
    ("Programming", "Python, SQL"),
    ("Data Analysis", "Pandas, NumPy, Power BI, Tableau, Excel"),
    ("Databases", "MySQL, Airtable"),
    ("Automation", "n8n, Make.com, APIs, Webhooks"),
    ("Core CS", "DSA, OOP, DBMS, Operating Systems"),
    ("Tools", "Git, GitHub, Claude Code, Jupyter Notebook"),
]
for k, v in skills:
    c.setFont("Helvetica-Bold", 9.5)
    c.setFillColor(INK)
    c.drawString(M, y, f"{k}:")
    c.setFont("Helvetica", 9.5)
    c.setFillColor(SUB)
    c.drawString(M + 95, y, v)
    y -= 13

heading("Projects")
line("Autonomous Data Enrichment & AI Qualification Pipeline", "Helvetica-Bold")
for t in [
    "- Built an automated workflow with Make.com and Airtable for end-to-end lead processing.",
    "- Developed an OpenAI-powered company enrichment system returning structured JSON.",
    "- Integrated Vapi Voice AI for outreach; captured transcripts and ran sentiment analysis.",
]:
    line(t, color=SUB, dx=4)
y -= 2
line("Power BI - Data Professional Survey Dashboard", "Helvetica-Bold")
for t in [
    "- Built an interactive dashboard analyzing 1,000+ survey responses.",
    "- Cleaned and modeled data with Power Query; created KPI metrics using DAX.",
    "- Generated insights on salary trends, job roles and work-life balance.",
]:
    line(t, color=SUB, dx=4)

heading("Experience")
line("Data Analytics Virtual Experience Program - Deloitte (Forage), 2026", "Helvetica-Bold")
for t in [
    "- Completed a simulation involving data analysis and forensic technology tasks.",
    "- Examined datasets to identify anomalies and business patterns.",
    "- Built visual reports and dashboards for stakeholder communication.",
]:
    line(t, color=SUB, dx=4)

heading("Certifications")
for t in [
    "Data Analytics Job Simulation - Deloitte (Forage), 2026",
    "SOAR - AI to be Aware - Microsoft (Skill India / NCVET), 2026",
    "Claude 101 - Anthropic, 2026",
]:
    line(f"- {t}", color=SUB)

c.showPage()
c.save()
print("wrote", PATH)
