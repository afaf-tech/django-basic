from django.shortcuts import render


def index(request):
    context = {
        'judul':'Kelas terbuka ',
        'heading': 'selamat datang',
        'subheading': 'di kelas terbuka',
    }
    return render(request, 'index.html', context)