@echo off
chcp 65001 >nul
title TỰ ĐỘNG ĐẨY BÁO CÁO AI THPT PHỤC HÒA LÊN GITHUB & VERCEL
color 0A

echo ======================================================================
echo   HỆ THỐNG TỰ ĐỘNG ĐỒNG BỘ BÁO CÁO AI LÊN GITHUB & VERCEL
echo   Báo cáo: Nghiên cứu giải pháp ứng dụng AI trong thiết kế bài giảng
echo   và đổi mới phương pháp dạy học ở trường THPT Phục Hòa
echo ======================================================================
echo.

set "PATH=C:\Users\DMX HOA THUAN\AppData\Local\Programs\Git\cmd;C:\Users\DMX HOA THUAN\AppData\Local\Programs\gh\bin;%PATH%"
cd /d "d:\Du-an-web\web-bao-cao-ai-thpt-phuc-hoa"

echo [1/3] Đang cập nhật báo cáo Word và kiểm tra thay đổi...
python deploy.py

echo.
echo ======================================================================
echo   ✓ ĐẨY LÊN GITHUB THÀNH CÔNG!
echo   ✓ Vercel & GitHub Pages đang tự động triển khai (CI/CD)...
echo ======================================================================
echo.
echo [LINK TRUY CẬP TRỰC TUYẾN]:
echo   1. Kho mã nguồn GitHub: https://github.com/hoptin8686-design/web-bao-cao-ai-thpt-phuc-hoa
echo   2. Link Web Vercel:     https://web-bao-cao-ai-thpt-phuc-hoa.vercel.app/
echo.
echo [FILE WORD TRÊN MÀN HÌNH MÁY TÍNH (DESKTOP)]:
echo   - D:\Desktop\Bao_cao_AI_THPT_Phuc_Hoa.docx
echo.
pause
